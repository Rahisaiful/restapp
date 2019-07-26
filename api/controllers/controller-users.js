const usersModel = require('../models/Model-users')

// User Registration
const userRegistration = ( req, res, next ) => {


    let saveUser = new usersModel({
        name: req.body.name,
        password: req.body.name
    })

    saveUser.save()
            .then( data => {

            } )
            .catch( err => {

            } )
}


module.exports = {
    userRegistration
}