const express = require('express')
const app = express()

const musiques = [
    { "titre": "Song 1", "artiste": "Artiste 1" },
    { "titre": "Song 2", "artiste": "Artiste 2" },
    { "titre": "Song 3", "artiste": "Artiste 3" }
]

app.get('/musiques', (req, res) => {
    res.json(musiques);
});

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API de musiques !');
})

app.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
})