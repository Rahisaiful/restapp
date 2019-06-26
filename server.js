// Import express
const express = require('express');
// Import routes
const contactRoute = require( './api/routes/contacts' )
// express app init
const app = express()
// Server Port init
const PORT = process.env.PORT || 3000

/**
 * 
 * Routes 
 * 
 */

    // Use routes
    app.use( '/api/contacts', contactRoute )

    // 
    app.get( '/', ( req, res ) => {
        res.send( '<h1>Say hello World With node mon</h1>' )
    } )


// Server listen
app.listen(PORT, () => {
    console.log( `Server is runing on port ${PORT}` )
});