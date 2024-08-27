const { Favorite, SharedLink } = require('../models');
const createSharedLink = async (favoriteIds) => {
    const favorites = await Favorite.findAll({
        where: { id: favoriteIds }
    });

    if (favorites.length !== favoriteIds.length) {
        throw new Error('Some favorites not found in the database');
    }
    const sharedLink = await SharedLink.create();
    await sharedLink.addFavorites(favorites);

    return sharedLink.uuid;
};

const getFavoritesBySharedLink = async (uuid) => {
    const sharedLink = await SharedLink.findOne({
        where: { uuid },
        include: Favorite,
    });

    if (!sharedLink) {
        throw new Error('Shared link not found');
    }

    return sharedLink.Favorites;
};

module.exports = {
    createSharedLink,
    getFavoritesBySharedLink,
};
