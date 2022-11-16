const express = require('express')
const router = express.Router()


router.get('/:term', (req,res) => {
    const term = req.params.term;
    res.status(200).send(`No results for '${term}', did you mean crab?`)
})

module.exports = router;
