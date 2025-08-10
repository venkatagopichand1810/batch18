// import the mongoose

const mongoose = require("mongoose");

// load the env variables from .env
require("dotenv").config()

//connection method to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb database is connected successfully")
    } catch(error){
        console.log("Unable to connect to the database")
    }
}

module.exports = connectDB;