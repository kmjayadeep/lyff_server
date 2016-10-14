const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    username: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['active', 'busy', 'not_verified', 'blocked'],
        default: 'not_verified'
    },
    dob: Date,
    gender: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    address: {
        houseNo: String,
        city: String,
        state: String
    }
    experience: Number,
    contactNo: String,
    department: String,
    location:{
    	lat:Number,
    	long:Number,
    	updated:Date
    }
})

const Helper = mongoose.model('helper', Schema)

module.exports = Helper
