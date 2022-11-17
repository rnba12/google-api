const express = require('express')
const app = express()
const routes = require('./routes').default
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send("Google !!!");
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

app.use('/google', routes)

module.exports = app;