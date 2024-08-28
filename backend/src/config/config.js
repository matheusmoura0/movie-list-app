require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    API_KEY: process.env.API_KEY,
    DATABASE_URL: process.env.DATABASE_URL || './database.sqlite',
};