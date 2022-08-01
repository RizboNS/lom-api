const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('posts')
})

router.get('/specific', (req, res) => {
    res.send('specific posts')
})

module.exports = router