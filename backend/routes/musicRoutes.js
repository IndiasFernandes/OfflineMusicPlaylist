const express = require('express');
const musicController = require('../controllers/musicController');
const router = express.Router();

router.get('/', musicController.listSongs);
router.get('/:id', musicController.getSong);

module.exports = router;
