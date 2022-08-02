const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

router.get('/', (req, res) => {
    res.send('hi from customers')
})


module.exports = router