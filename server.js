const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')


// BODY-PARSER
app.use(bodyParser.json())

// IMPORT ROUTES
const postsRoute = require('./routes/posts')
const customersRoute = require('./routes/customers')

// MIDDLEWARES
app.use('/posts', postsRoute)
app.use('/customers', customersRoute)

// ROUTES
app.get('/', (req, res) => {
    res.send('hello from darkness')
})


// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(
    console.log('Connected to the DB!')
)
.catch(err => console.log(err))



// LISTENER
app.listen(3000)