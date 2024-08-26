const favoritesService = require('../services/favoritesService');

const addFavorite = async (req, res) => {
    try {
        const favorite = await favoritesService.addFavorite(req.body);
        res.status(201).json(favorite);
    } catch (error) {
        console.error('Error adding favorite:', error);
        res.status(500).json({ error: 'Failed to add favorite' });
    }
};

const getFavorites = async (req, res) => {
    try {
        const favorites = await favoritesService.getFavorites();
        res.status(200).json(favorites);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'Failed to fetch favorites' });
    }
};

const removeFavorite = async (req, res) => {
    try {
        const success = await favoritesService.removeFavorite(req.params.id);
        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Favorite not found' });
        }
    } catch (error) {
        console.error('Error removing favorite:', error);
        res.status(500).json({ error: 'Failed to remove favorite' });
    }
};

module.exports = {
    addFavorite,
    getFavorites,
    removeFavorite
};
