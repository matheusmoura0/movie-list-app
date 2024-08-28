const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./config/database');
const config = require('./config/config');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});


const startServer = async () => {
  try {
    await sequelize.authenticate();
    if (config.NODE_ENV === 'development') {
      console.log('Connection has been established successfully.');
    }

    await sequelize.sync({ force: true });
    if (config.NODE_ENV === 'development') {
      console.log('All models were synchronized successfully.');
    }

    app.listen(config.PORT, () => {
      if (config.NODE_ENV === 'development') {
        console.log(`Server is running on http://localhost:${config.PORT}`);
      }
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();

module.exports = app;
