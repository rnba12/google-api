const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
    res.status(200).send("Google !!!");
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

app.use(bodyParser.json());
app.use('/google', routes)

module.exports = app;
