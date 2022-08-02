const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({message: err})
    }
})
//  GET POST BY ID
router.get('/:id',async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.json({message: err})
    }
})

// CREATE POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({message: err})
    }
})

// DELETE POST
router.delete('/:id', async (res, req) => {
    try {
        const removedPost = await Post.remove({_id: req.params.id})
        res.json(removedPost)
    } catch (err) {
        res.json({message: err}) 
    }
})

module.exports = router