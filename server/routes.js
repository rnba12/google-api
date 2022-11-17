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

// router.post('/search/:term', (req,res) => {
//     const term = req.body.term;
//     console.log(term);
//     data[0].query = term;
//     res.status(201).send(data[0].query);
// })

module.exports = router;
