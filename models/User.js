const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: Date,
    gender: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    income: Number,
    education: String,
    address: {
        houseNo: String,
        city: String,
        state: String
    },
    phr: [{
        field: String,
        value: String,
        lastUpdated:Date
    }],
})

var User = mongoose.model('user', Schema)

module.exports = User
