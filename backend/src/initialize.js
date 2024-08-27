const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const { Sequelize } = require('sequelize');
const db = require('./models');
const Favorite = require('./models/Favorite')(db.sequelize, Sequelize.DataTypes);
const SharedLink = require('./models/SharedLink')(db.sequelize, Sequelize.DataTypes);

async function initialize() {
    const sequelize = new Sequelize(config.database, config.username, config.password, config);

    await Favorite.sync();
    await SharedLink.sync();
    await sequelize.sync({ force: true });

}

module.exports = {
    initialize
};
