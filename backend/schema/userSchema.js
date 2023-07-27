const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    collegeName:{
        type: String,
        default: ''
    },
    Skills:{
        type: String,
        default: ''
    }
},{timestamps: true});

module.exports = mongoose.model('User',userSchema)
