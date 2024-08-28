require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    API_KEY: "fe3b5dd36d12c8fe13b355086de0939b",
    DATABASE_URL: process.env.DATABASE_URL || './database.sqlite',
};