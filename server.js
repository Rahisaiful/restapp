// Import express
const express = require('express');
// middleware morgan
const morgan = require( 'morgan' );
// middleware body parser
const bodyParser = require( 'body-parser' );
// Cors
const cors = require('cors');
//
const mongoose = require( 'mongoose' )
//
mongoose.connect('mongodb://localhost:27017/user',{ useNewUrlParser: true })
// mongoose connection
const db = mongoose.connection
// Import contact routes
const contactRoute = require( './api/routes/contacts' )
// Import users routes
const usersRoute = require('./api/routes/users')

// express app init
const app = express()
// Server Port init
const PORT = process.env.PORT || 3000




/**
 * 
 * Middlewares 
 * 
 */
    // json parser
    const jsonParser = bodyParser.json()
    

/**
 * 
 * Routes 
 * 
 */

    // parse application/json
    app.use(jsonParser)

    // Contact routes
    app.use( '/api/contacts/', contactRoute )
    // User routes
    app.use( '/api/user/',  usersRoute )
    

    // 
    app.get( '/', ( req, res ) => {
        res.send( '<h1>Say hello World With node mon</h1>' )
    } )


// Server listen
app.listen(PORT, () => {
    console.log( `Server is runing on port ${PORT}` )
});