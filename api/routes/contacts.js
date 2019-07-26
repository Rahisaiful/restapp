const express = require( 'express' )
const router = express.Router()

const GetController = require( '../controllers/controller-contacts' )

// Get All
router.get( '/', GetController.getAllContactController )
// Get by id
router.get( '/:id', GetController.getContactById )
// Post
router.post( '/', GetController.postContactData )
// Put
router.put( '/:id', GetController.editContactData )
// Delete
router.delete( '/:id', GetController.deleteContactData )

module.exports = router