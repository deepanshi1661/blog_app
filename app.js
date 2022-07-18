const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BlogAppData'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const appRouter = require('./routes/blogs')
app.use('/blogs',appRouter)

app.listen(9000, () => {
    console.log('Server started')
})