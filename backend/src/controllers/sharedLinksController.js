const sharedLinksService = require('../services/sharedLinksService');

const createSharedLink = async (req, res) => {
    try {
        const { favoriteIds } = req.body;

        if (!Array.isArray(favoriteIds) || favoriteIds.length === 0) {
            return res.status(400).json({ error: 'favoriteIds must be a non-empty array' });
        }

        const uuid = await sharedLinksService.createSharedLink(favoriteIds);
        res.status(201).json({ sharedLink: `/shared/${uuid}` });
    } catch (error) {
        console.error('Error creating shared link:', error);
        res.status(500).json({ error: error.message });
    }
};

const getFavoritesBySharedLink = async (req, res) => {
    try {
        const { uuid } = req.params;
        const favorites = await sharedLinksService.getFavoritesBySharedLink(uuid);
        res.status(200).json(favorites);
    } catch (error) {
        console.error('Error fetching shared link favorites:', error);
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createSharedLink,
    getFavoritesBySharedLink,
};
