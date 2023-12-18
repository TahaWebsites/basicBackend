const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const register = new mongoose.model('Userdet', employeeSchema)
module.exports = register;