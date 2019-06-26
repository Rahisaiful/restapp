const express = require( 'express' )
const router = express.Router()

// Get
router.get( '/', ( req, res, next ) => {
    res.status(200).json( {
        address: '46/e kolabagan'
    } );
} )

// Post
// retuer.post( '/', ( req, res, next ) => {
    
// } )

module.exports = router