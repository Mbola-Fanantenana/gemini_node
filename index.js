const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { generateResponse, history } = require('./controllers/index')

dotenv.config()

const app = express()
const port = process.env.PORT

// pour analyser les requêtes JSON
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send("Hello world !")
});


// route pour générer une réponse
app.post('/generate', generateResponse)

// route pour obtenir l'historique des réponses
app.get('/generate', (req, res) => {
    res.send(history)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
