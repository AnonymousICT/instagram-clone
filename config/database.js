const mongoose = require('mongoose')
const config = require('./index')

const db = mongoose.connect(config.mongo_uri, { useNewUrlParser:true, useUnifiedTopology: 
    true  })
    .then(()=>console.log('connected to database'))
    .catch((err)=>{
        console.error('error', err)
    })

    module.exports = db