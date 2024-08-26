const request = require('supertest');
const sequelize = require('../../config/database');
const app = require('../../app');
const SharedLink = require('../../models/SharedLink');
const Favorite = require('../../models/Favorite');

describe('Shared Links API', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    beforeEach(async () => {
        await SharedLink.destroy({ where: {} });
        await Favorite.destroy({ where: {} });
    });

    it('should create a new shared link', async () => {
        const favorite1 = await Favorite.create({ movie_id: 1, title: 'Test Movie 1', vote_average: 8.5 });
        const favorite2 = await Favorite.create({ movie_id: 2, title: 'Test Movie 2', vote_average: 7.5 });

        const response = await request(app)
            .post('/shared')
            .send({ favoriteIds: [favorite1.id, favorite2.id] });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('sharedLink');

        const uuid = response.body.sharedLink.split('/shared/')[1];
        const sharedLink = await SharedLink.findOne({ where: { uuid }, include: Favorite });

        expect(sharedLink).not.toBeNull();
        expect(sharedLink.Favorites.length).toBe(2);
    });

    it('should return 404 if shared link not found', async () => {
        const response = await request(app).get('/shared/non-existent-uuid');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Shared link not found' });
    });

    it('should return favorites for a shared link', async () => {
        const favorite1 = await Favorite.create({ movie_id: 1, title: 'Test Movie 1', vote_average: 8.5 });
        const favorite2 = await Favorite.create({ movie_id: 2, title: 'Test Movie 2', vote_average: 7.5 });

        const sharedLink = await SharedLink.create();
        await sharedLink.addFavorites([favorite1, favorite2]);

        const response = await request(app).get(`/shared/${sharedLink.uuid}`);

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0].title).toBe('Test Movie 1');
        expect(response.body[1].title).toBe('Test Movie 2');
    });
});
