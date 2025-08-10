const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successully")
    } catch(err){
        console.log("unable to connect the mongodb")
    }
};

module.exports = connectDB;