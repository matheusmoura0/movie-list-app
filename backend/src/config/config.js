require('dotenv').config();

module.exports = {
  development: {
    API_KEY: process.env.API_KEY,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.POSTGRES_DIALECT || 'postgres',
    logging: console.log,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    use_env_variable: 'POSTGRES_URL',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
