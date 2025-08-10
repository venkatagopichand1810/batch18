
// import mongoose
const mongoose = require("mongoose");

// create the schema for the user model 
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unqiue: true
    },
    age: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {strict: false})

// create the modal based on the above schema
const user  = mongoose.model("student", userSchema); //it is going to create the collection in july122025venkat
module.exports = user;