const model = require('./model')


module.exports = {
    login: (req, res) => {
        res.status(200).send({msg: 'Login Success'})
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
                res.status(200).send({msg: 'Register Successful', user_id: result._id})
            })
            .catch(err =>{
                console.error(err)
                res.status(400).send({msg: 'Register Unsuccessful', user_id: result._id})
            })
            
    }
}