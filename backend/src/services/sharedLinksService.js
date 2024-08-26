const SharedLink = require('../models/SharedLink');
const Favorite = require('../models/Favorite');

const createSharedLink = async (favoriteIds) => {
    // Obtenha os favoritos únicos
    const uniqueFavoriteIds = [...new Set(favoriteIds)];

    const favorites = await Favorite.findAll({
        where: { id: uniqueFavoriteIds },
    });

    if (favorites.length !== uniqueFavoriteIds.length) {
        throw new Error('Some favorites not found');
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
