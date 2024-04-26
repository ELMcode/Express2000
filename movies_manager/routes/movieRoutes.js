const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');
const bp = require("body-parser");

router.use(bp.json());

// POST : Add a movie
router.post('/add', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET : Retrieve


module.exports = router