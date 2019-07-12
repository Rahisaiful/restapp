const mongoose = require('mongoose')
const valid = require('validator')

const Schema = mongoose.Schema


// Contact Schema

const contactSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        minlength: 3

    },
    phone:{
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        //unique: true
    },
    email:{
        type: String,
        trim: true,
        validate: {
            validator: ( v ) => {
                return valid.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }

    }
})


const contactModel = mongoose.model( 'contacts', contactSchema )


module.exports = contactModel;