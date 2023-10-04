const express = require("express")
const Song = require('../models/song')


const router = express.Router()

module.exports = router;

router.get('/getAll', (req, res) => {
    res.send('GET ALL API')
})

router.get('/getOneSong', (req, res) => {
    res.send(req.body)
})

router.post('/addSong', async (req, res) => {
    try {
        const  {
            tittle,
            author,
            type,
            release,
            track
        } = req.body

        const newSong = new Song({
            tittle,
            author,
            type,
            release,
            track
        })

        const savedSong = await newSong.save();
        res.status(201).json(savedSong)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})