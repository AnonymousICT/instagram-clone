const model = require('./model')
const jwt = require('jsonwebtoken')
const config = require('../../config')

module.exports = {
    login: (req, res) => {
        model.findOne({ email: req.body.email }, (err, user) => {
            if(err) throw err;

            user.comparePassword(req.body.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch) {
                    let token = jwt.sign({ id: user._id }, config.secret, {expiresIn: 86400})
                    res.status(200).send({auth: true, token})
                } else {
                    res.status(500).send({auth: false, msg: err})
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
                console.log(result)
                let token = jwt.sign({ id: result._id }, config.secret, {expiresIn: 86400})
                    res.status(200).send({auth: true, token})
            })
            .catch(err =>{
                console.error(err)
                res.status(500).send({auth:false, msg: err})
            })
            
    }
}