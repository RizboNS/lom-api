const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

// Create customer
router.post('/', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        lastName: req.body.lastName,
        streetName: req.body.streetName,
        streetNum: req.body.streetNum,
        state: req.body.state,
        zip: req.body.zip,
        // TO DO ORDER LIST
    })
    try {
        const savedCustomer = await customer.save()
        res.json(savedCustomer)
    } catch (err) {
        res.json({message: err})
    }
})




module.exports = router