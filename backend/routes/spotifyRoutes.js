const express = require('express');
const spotifyService = require('../services/spotifyService');
const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const results = await spotifyService.searchMusic(req.query.q);
    res.json(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;