const request = require('supertest');
const app = require('../../app');
//const SequelizeMock = require("sequelize-mock");

jest.mock('../../models/Favorite', () => {
    const SequelizeMock = require('sequelize-mock');
    const dbMock = new SequelizeMock();
    const FavoriteMock = dbMock.define('Favorite', {
        id: 1,
        movie_id: 1,
        title: 'Test Movie',
        vote_average: 8.5,
    });
    FavoriteMock.findAll = jest.fn();
    FavoriteMock.findOne = jest.fn();
    return FavoriteMock;
});

describe('Favorites API', () => {
    it('should add a new favorite', async () => {
        const favoriteData = { movie_id: 1, title: 'Test Movie', vote_average: 8.5 };
        Favorite.create.mockResolvedValue(favoriteData);

        const response = await request(app).post('/favorites').send(favoriteData);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(favoriteData);
        expect(Favorite.create).toHaveBeenCalledWith(favoriteData);
    });

    it('should get all favorites', async () => {
        const mockFavorites = [{ id: 1, title: 'Test Movie' }];
        Favorite.findAll.mockResolvedValue(mockFavorites);

        const response = await request(app).get('/favorites');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockFavorites);
    });

    it('should delete a favorite', async () => {
        const mockFavorite = { id: 1, destroy: jest.fn() };
        Favorite.findByPk.mockResolvedValue(mockFavorite);

        const response = await request(app).delete('/favorites/1');

        expect(response.status).toBe(204);
        expect(Favorite.findByPk).toHaveBeenCalledWith('1');
        expect(mockFavorite.destroy).toHaveBeenCalled();
    });

    it('should return 404 if favorite not found', async () => {
        Favorite.findByPk.mockResolvedValue(null);

        const response = await request(app).delete('/favorites/1');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Favorite not found' });
    });
});
