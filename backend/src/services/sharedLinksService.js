const SharedLink = require('../models/SharedLink');
const Favorite = require('../models/Favorite');

const createSharedLink = async (favoriteIds) => {
    const uniqueFavoriteIds = [...new Set(favoriteIds)];
    const favorites = await Favorite.findAll({
        where: { id: uniqueFavoriteIds },
    });
    if (favorites.length !== uniqueFavoriteIds.length) {
        throw new Error('Some favorites not found');
    }
    const sharedLink = await SharedLink.create();

    const existingFavorites = await sharedLink.getFavorites();
    const existingFavoriteIds = new Set(existingFavorites.map(fav => fav.id));

    const newFavorites = favorites.filter(fav => !existingFavoriteIds.has(fav.id));

    if (newFavorites.length > 0) {
        await sharedLink.addFavorites(newFavorites);
    } else {
        console.log('All selected favorites are already associated with this shared link.');
    }

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
