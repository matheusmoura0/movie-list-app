const express = require('express');
const router = express.Router();
const sharedLinksController = require('../controllers/sharedLinksController');

router.post('/api', sharedLinksController.createSharedLink);
router.get('/api/:uuid', sharedLinksController.getFavoritesBySharedLink);

module.exports = router;