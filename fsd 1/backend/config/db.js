// mongodb connection configuration 

const mongoose = require("mongoose");

// create the function to connect to the mongodb

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb Connected successfully")
    } catch(error){
        console.log("Connection error")
    }
}

module.exports = connectDB