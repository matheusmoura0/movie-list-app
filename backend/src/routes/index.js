const express = require('express');
const router = express.Router();

const favoritesRoutes = require('./favoritesRoutes');
const sharedLinksRoutes = require('./sharedLinksRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/api/favorites', favoritesRoutes);
router.use('/api/shared', sharedLinksRoutes);
router.use('/movies/search', searchRoutes);

module.exports = router;
