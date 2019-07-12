const express = require( 'express' )
const router = express.Router()

const GetController = require( '../controllers/controller-contacts' )

// Get
router.get( '/', GetController.getController )

// Get id from url
router.get( '/:id', GetController.getIdController )

// post
router.post( '/', GetController.postContactData )


// Post
router.post( '/contacts', ( req, res, next ) => {
    res.status(201).json({
        info: 'Hello i\'m post route'
    })    
} )

module.exports = router