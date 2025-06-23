const express = require('express')
const app = express()

// Une route GET

app.get('/', (req, res) => {
    res.send('Hello depuis ton premier serveur Express !'
    )
});

// Le serveur écoute sur le port 3000

app.listen(3000, () => {
    console.log('Serveur lancé sur http:/localhost:3000')
})