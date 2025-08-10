
// import mongoose
const mongoose = require("mongoose");

// define the function to connect to the mongodb 

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/july122025venkat")
        console.log("Mongdb database connected successfully")
    } catch(error){
        console.log("failed to connect to the database")
    }

}

module.exports = connectDB