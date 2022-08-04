const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

// Get Customer by ID
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        res.json(customer)
    } catch (err) {
        res.json({message: err})       
    }
})

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch (err) {
        res.json({message: err})
    }
})



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

// Update customer
router.patch('/:id',async (req, res) => {
    try {
        const updatedCustomer = await Customer.updateOne(
            {_id: req.params.id},
            {$set: {
                name: req.body.name,
                lastName: req.body.lastName,
                streetName: req.body.streetName,
                streetNum: req.body.streetNum,
                state: req.body.state,
                zip: req.body.zip, 
            }}
        )
        res.json(updatedCustomer)
    } catch (err) {
        res.json({message: err})      
    }

})
// Delete Customer
router.delete('/:id', async (req, res) => {
    try {
        const removedCustomer = await Customer.remove({_id: req.params.id})
        res.json(removedCustomer)
    } catch (error) {
        res.json({message: err})
    }
})

module.exports = router