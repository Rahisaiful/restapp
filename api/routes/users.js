const express = require('express')
const router = express.Router()

const usersController = require('../controllers/controller-users')

router.post( '/', usersController.userRegistration )


module.exports = router