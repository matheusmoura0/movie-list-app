const { Sequelize } = require('sequelize');
const path = require('path');
const config = require('./config');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../../', config.DATABASE_URL),
    logging: false,
});

module.exports = sequelize;