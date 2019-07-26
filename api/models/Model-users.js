const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Users Schema
const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    password: {
        type: String
    }
})


const usersModel = mongoose.model( 'users', userSchema )

module.exports = usersModel