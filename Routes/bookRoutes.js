const express = require('express');
const router = express.Router();
const fs = require('fs');

const data = fs.readFileSync('data/livres.json');
const livres = JSON.parse(data);


router.get('/livres', (req,res) => {
    res.json(livres);
})

router.get('/livres/:id', (req,res) => {
    const id =  req.params.id;
    const livre = livres.find(livre => livre.id === parseInt(id));

    if (livre) {
        res.json(livre);
    } else {
        res.status(404).send('Livre non trouvé');
    }
})



module.exports = router;