const express = require('express');
const router = express.Router();
const sharedLinksController = require('../controllers/sharedLinksController');

router.post('/', sharedLinksController.createSharedLink);
router.get('/:uuid', sharedLinksController.getFavoritesBySharedLink);

module.exports = router;