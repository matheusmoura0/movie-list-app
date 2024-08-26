const favoritesService = require('../../services/favoritesService');
const Favorite = require('../../models/Favorite');

jest.mock('../../models/Favorite');

describe('favoritesService', () => {
    it('should add a favorite', async () => {
        const favoriteData = { movie_id: 1, title: 'Test Movie', vote_average: 8.5 };
        Favorite.create.mockResolvedValue(favoriteData);

        const result = await favoritesService.addFavorite(favoriteData);
        expect(result).toEqual(favoriteData);
        expect(Favorite.create).toHaveBeenCalledWith(favoriteData);
    });

    it('should get all favorites', async () => {
        const mockFavorites = [{ id: 1, title: 'Test Movie' }];
        Favorite.findAll.mockResolvedValue(mockFavorites);

        const result = await favoritesService.getFavorites();
        expect(result).toEqual(mockFavorites);
        expect(Favorite.findAll).toHaveBeenCalled();
    });

    it('should delete a favorite by id', async () => {
        const mockFavorite = { id: 1, destroy: jest.fn() };
        Favorite.findByPk.mockResolvedValue(mockFavorite);

        const result = await favoritesService.removeFavorite(1);
        expect(result).toBe(true);
        expect(mockFavorite.destroy).toHaveBeenCalled();
    });

    it('should return false if favorite not found', async () => {
        Favorite.findByPk.mockResolvedValue(null);

        const result = await favoritesService.removeFavorite(1);
        expect(result).toBe(false);
    });
});
