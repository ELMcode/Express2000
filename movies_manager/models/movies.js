const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    director: String,
    releaseDate: Date,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;


