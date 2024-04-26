const express = require('express');
const router = express.Router();
const fs = require('fs');
const bp = require('body-parser')

const data = fs.readFileSync('data/livres.json');
const livres = JSON.parse(data);

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

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

router.post('/ajout-livre', (req, res) => {
    const newLivre = req.body;
// TODO : req.body undefined ??

    livres.push(newLivre);

    fs.writeFile('data/livres.json', JSON.stringify(livres), (err) => {
        if (err) {
            res.status(500).send("Echec lors de l'écriture de la data");
        } else {
            res.status(201).send('Livre ajouté');
        }
    });
});

router.get('/recherche-livre/auteur/:auteur', (req, res) => {

});

module.exports = router;