const express = require('express');
const playlistController = require('../controllers/playlistController');
const router = express.Router();

router.post('/', playlistController.createPlaylist);
router.get('/:id', playlistController.getPlaylist);

module.exports = router;
