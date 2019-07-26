const contactModel = require('../models/Model-contacts')


// Get all contact
const getAllContactController = ( req, res, next ) => {
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

// Get contact bt id
const getContactById = ( req, res, next ) => {
    let id = req.params.id
    contactModel.findById(id)
    .then( data => {
        res.status(200).json({
            message: 'Get data by id',
            data
        })
    } )
    .catch( err => {
        res.status(500).json({
            message: ' No data found',
            error: err
        })
    })
}

// Post contact
const postContactData = ( req, res, next ) => {
    let contact = new contactModel({
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
// Edit contact 
const editContactData = ( req, res, next ) => {
    let id = req.params.id

    let updatedContactInfo = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }


    contactModel.findByIdAndUpdate( id, {$set: updatedContactInfo} )
                .then( data => {

                    contactModel.findById( data._id )
                                .then( newData => {
                                    res.json({
                                        message: "Contact data updated",
                                        data: newData
                                    })
                                } )

                } )
                .catch( err => {
                    res.status(500).json({
                        message: 'Error Occured',
                        error: err
                    })
                } )

}
// Delete contact
const deleteContactData = ( req, res, next ) => {

    let id = req.params.id
    contactModel.findByIdAndRemove(id)
                .then( data => {
                    res.status(201).json({
                        message: 'Contact delete successfuly',
                        data
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
    getAllContactController,
    getContactById,
    postContactData,
    editContactData,
    deleteContactData
}
