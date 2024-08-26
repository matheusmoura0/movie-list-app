const express = require('express');
const router = express.Router();

const favoritesRoutes = require('./favoritesRoutes');
const sharedLinksRoutes = require('./sharedLinksRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/favorites', favoritesRoutes);
router.use('/shared', sharedLinksRoutes);
router.use('/search', searchRoutes);

module.exports = router;
