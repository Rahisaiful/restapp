const contactModel = require('../models/Model-contacts')


//
const getController = ( req, res, next ) => {
    contactModel.find()
        .then( contact =>{
            res.status(200).json({
                message: 'All Contact',
                contact
            })
        } )
        .catch( err => {
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        } )
}
//
const getIdController = ( req, res, next ) => {
    const id = req.params.id
    res.status(200).json({
        id
    })
}

// Post 
const postContactData = ( req, res, next ) => {
    const contact = new contactModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })

    contact.save()
        .then( data => {
            res.status(201).json({
                message: 'Contact added',
                contact: data
            })
        } )
        .catch( err => {
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        } )
}

module.exports = {
    getController,
    getIdController,
    postContactData
}
