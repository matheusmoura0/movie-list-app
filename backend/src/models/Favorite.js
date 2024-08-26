const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Favorite = sequelize.define('Favorite', {
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vote_average: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    poster_path: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    release_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    overview: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    underscored: true,
});

module.exports = Favorite;
