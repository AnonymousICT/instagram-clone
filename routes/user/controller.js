const model = require('./model')
const jwt = require('jsonwebtoken')
const config = require('../../config')

module.exports = {
    login: (req, res) => {
        model.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
            if(err) {
                res.status(500).send({auth:false, msg:"Internal Server error"})
            }

            if(!user) {
                res.status(401).send({auth: false, msg: "User does not exist"})
                return
            }

            user.comparePassword(req.body.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch) {
                    let token = jwt.sign({ id: user._id }, config.secret, {expiresIn: 86400})
                    res.status(200).send({auth: true, token})
                } else {
                    res.status(401).send({auth: false, msg: "Password is incorrect"})
                }
            })
        })
    },
    register: (req, res) => {
        let newUser = new model({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
        })

        newUser.save()
            .then(result =>{
                let token = jwt.sign({ id: result._id }, config.secret, {expiresIn: 86400})
                    res.status(200).send({auth: true, token})
            })
            .catch(err =>{
                res.status(400).send({auth:false, msg: "This account already exists"})
            })
            
    }
}