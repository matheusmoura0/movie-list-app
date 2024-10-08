const sharedLinksService = require('../../services/sharedLinksService');
const SharedLink = require('../../models/SharedLink');
const Favorite = require('../../models/Favorite');

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

jest.mock('../../models/SharedLink', () => {
    const SequelizeMock = require('sequelize-mock');
    const dbMock = new SequelizeMock();
    const SharedLinkMock = dbMock.define('SharedLink', {
        uuid: 'test-uuid',
    });
    SharedLinkMock.findOne = jest.fn();
    SharedLinkMock.create = jest.fn();
    return SharedLinkMock;
});

describe('sharedLinksService', () => {
    it('should create a shared link', async () => {
        const favoriteIds = [1, 2];
        const mockFavorites = [{ id: 1 }, { id: 2 }];
        const mockSharedLink = { uuid: 'test-uuid', addFavorites: jest.fn() };

        Favorite.findAll.mockResolvedValue(mockFavorites);
        SharedLink.create.mockResolvedValue(mockSharedLink);

        const result = await sharedLinksService.createSharedLink(favoriteIds);

        expect(result).toBe('test-uuid');
        expect(Favorite.findAll).toHaveBeenCalledWith({ where: { id: favoriteIds } });
        expect(mockSharedLink.addFavorites).toHaveBeenCalledWith(mockFavorites);
    });

    it('should throw error if some favorites are not found', async () => {
        const favoriteIds = [1, 2];
        Favorite.findAll.mockResolvedValue([{ id: 1 }]);

        await expect(sharedLinksService.createSharedLink(favoriteIds)).rejects.toThrow('Some favorites not found');
    });

    it('should get favorites by shared link uuid', async () => {
        const mockSharedLink = { uuid: 'test-uuid', Favorites: [{ id: 1 }] };
        SharedLink.findOne.mockResolvedValue(mockSharedLink);

        const result = await sharedLinksService.getFavoritesBySharedLink('test-uuid');
        expect(result).toEqual(mockSharedLink.Favorites);
        expect(SharedLink.findOne).toHaveBeenCalledWith({
            where: { uuid: 'test-uuid' },
            include: Favorite,
        });
    });

    it('should throw error if shared link not found', async () => {
        SharedLink.findOne.mockResolvedValue(null);

        await expect(sharedLinksService.getFavoritesBySharedLink('test-uuid')).rejects.toThrow('Shared link not found');
    });
});
