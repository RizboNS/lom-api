const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

// IMPORT ROUTES
const postsRoute = require('./routes/posts')

// MIDDLEWARES
app.use('/posts', postsRoute)



// ROUTES
app.get('/', (req, res) => {
    res.send('hello from darkness')
})


// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to the DB!')
})



// LISTENER
app.listen(3000)