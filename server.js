// Import express
const express = require('express');
// express app init
const app = express()
// Server Port init
const PORT = process.env.PORT || 3000

/**
 * 
 * Routes 
 * 
 */


    // 
    app.get( '/', ( req, res ) => {
        res.send( '<h1>Say hello World With node mon</h1>' )
    } )
    //
    app.get( '/posts', ( req, res) => {
        res.send( 'I am a posts page ' )
    } )

// Server listen
app.listen(PORT, () => {
    console.log( `Server is runing on port ${PORT}` )
});