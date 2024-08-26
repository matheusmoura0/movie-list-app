const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Favorite = require('./Favorite');

const SharedLink = sequelize.define('SharedLink', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
}, {
    timestamps: true,
});


SharedLink.belongsToMany(Favorite, { through: 'SharedLinkFavorites' });
Favorite.belongsToMany(SharedLink, { through: 'SharedLinkFavorites' });

module.exports = SharedLink;
