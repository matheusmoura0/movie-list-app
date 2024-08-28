const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

router.post('/api', favoritesController.addFavorite);
router.get('/api', favoritesController.getFavorites);
router.delete('/api/:id', favoritesController.removeFavorite);

module.exports = router;
