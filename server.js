const express = require('express')
const app = express();

require('dotenv').config({
    path: './config/config.env'
})

const config = require('./config/index')
const db = require('./config/database')
const cors= require('cors')

const userRouter = require('./routes/user')
const postRouter = require('./routes/post')

app.use(express.urlencoded({ limit:'50mb', extended: true}))
app.use(express.json({limit: '50mb'}))
app.use(cors())

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(config.port, console.log(`Server has started on ${config.port}`))