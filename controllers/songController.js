const express = require('express');
const router = express.Router();
const Product = require('../models/song');
const song = require('../models/song');

// Get all products
router.get('/song', async (req, res) => {
  try {
    const song = await song.find();
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single product by ID
router.get('/song/:id', async (req, res) => {
  try {
    const song = await song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;