const express = require( 'express' )
const router = express.Router()

// Get
router.get( '/', ( req, res, next ) => {
    res.status(200).json( {
        address: '46/e kolabagan'
    } );
} )

// Post
router.post( '/', ( req, res, next ) => {
    res.status(201).json({
        info: 'Hello i\'m post route'
    })    
} )

module.exports = router