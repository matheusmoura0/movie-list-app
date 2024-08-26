const express = require('express');
const router = express.Router();

const favoritesRoutes = require('./favoritesRoutes');
//const sharedLinksRoutes = require('./sharedLinksRoutes');

router.use('/favorites', favoritesRoutes);
//router.use('/shared', sharedLinksRoutes);

module.exports = router;
