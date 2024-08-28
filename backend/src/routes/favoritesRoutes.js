const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

router.post('/', favoritesController.addFavorite);
router.get('/', favoritesController.getFavorites);
router.delete('/:id', favoritesController.removeFavorite);

module.exports = router;
