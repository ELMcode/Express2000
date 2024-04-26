const express = require('express');
const app = express();
const PORT = 3000;

const bookRoutes = require('./Routes/bookRoutes');

app.use('/', bookRoutes);

app.get("/bienvenue", (req, res) => {
    res.send("<h1>Bienvenue sur mon site</h1>");
});

app.get("/info", (req, res) => {
    res.json({name: "Benoit", age: "31"});
});

app.get("/acces-interdit", (req, res) => {
    res.status(403).send("Accès interdit");
});

app.get("/redirection-accueil", (req, res) => {
    res.redirect("/bienvenue");
});

app.get("*", (req, res) => {
    res.redirect("/bienvenue");
});


app.listen(PORT, () => {
    console.log("Serveur en écoute sur le port", PORT);
})