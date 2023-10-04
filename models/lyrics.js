const mongoose = require('mongoose');

const lyricrs = new mongoose.Schema({
    tittle: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    text: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Song', song)