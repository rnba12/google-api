const express = require('express')
const router = express.Router()
const data = require('./database')

//get all data
router.get('/data', (req,res) => {
    res.status(200).send(data)
})

//get data for specific search category
router.get('/:result', (req,res) => {
   try{ 
        search = req.params.result;
        result = data.find((obj) => obj.searchCat == search);
        if (!result) {
            throw new Error("No results found")
        } else {
            res.status(200).send(result)
        }
    } catch(err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

router.post('/search', (req,res) => {
    const term = req.body;
    data[0] = term;
    res.status(201).send(data[0].query);
})

router.get('/search/query', (req, res) => {
    res.status(200).send(data[0])
})

module.exports = router;
