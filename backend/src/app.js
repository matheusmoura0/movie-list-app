const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { initialize } = require('./initialize');


const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

const startServer = async () => {
    await initialize();

    const PORT = process.env.PORT || 3000;
    const HOST = process.env.HOST || 'localhost';
    app.listen(PORT, () => {

    });
};


startServer();



module.exports = app;
