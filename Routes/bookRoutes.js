const express = require('express');
const router = express.Router();
const fs = require('fs');

const data = fs.readFileSync('data/livres.json');
const livres = JSON.parse(data);


router.get('/livres', (req,res) => {
    res.json(livres);
})



module.exports = router;