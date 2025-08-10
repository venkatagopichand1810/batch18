const mongoose = require("mongoose");

// define the use schema

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unique: true
    },

    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpries: {
        type: Date
    }
})

// create the user model
const User = mongoose.model("User", userSchema);

module.exports = User