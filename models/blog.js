const mongoose = require('mongoose')
const router = require('../routes/blogs')

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog', blogSchema)