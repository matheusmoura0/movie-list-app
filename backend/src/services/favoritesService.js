const { Favorite } = require('../models');

const addFavorite = async (favoriteData) => {
    return await Favorite.create(favoriteData);
};

const getFavorites = async () => {
    return await Favorite.findAll();
};

const removeFavorite = async (id) => {
    const favorite = await Favorite.findByPk(id);
    if (favorite) {
        await favorite.destroy();
        return true;
    }
    return false;
};

module.exports = {
    addFavorite,
    getFavorites,
    removeFavorite
};
