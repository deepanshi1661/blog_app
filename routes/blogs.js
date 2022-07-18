const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/', async(req, res) => {
    try{
        const blogs = await Blog.find()
        res.json(blogs)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req, res) => {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    })

    try{
        const a1 = await blog.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res) => {
    try{
        const blog = await Blog.findById(req.params.id) 
        blog.author = req.body.author
        blog.title = req.body.title
        blog.content = req.body.content
        const a1 = await blog.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async(req, res) => {
    try{
        const blog = await Blog.findByIdAndRemove(req.params.id)
        res.json(blog)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router