const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    account_created:{
        type: String,
        default: Date.now()
    }
})



userSchema.pre('save', function(next){
    let user = this;
    
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if(err) return next(err);
        
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err)
            
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return cb(err)
        cb(null, isMatch);
    })
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel