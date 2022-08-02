const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    streetNum: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    // TO DO ORDER LIST
})

module.exports = mongoose.model('Customers', CustomerSchema)