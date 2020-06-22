const express = require('express')
const app = express();

const config = require('./config/index')
const db = require('./config/database')
const cors= require('cors')

const userRouter = require('./routes/user')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/user', userRouter);

app.listen(config.port, console.log(`Server has started on ${config.port}`))