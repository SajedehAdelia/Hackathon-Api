const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add more fields as per your product requirements
});

module.exports = mongoose.model('song', songSchema);