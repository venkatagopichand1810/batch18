const mongoose = require("mongoose");
// model and schema useing mongoose
const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

module.exports = mongoose.model("User", userSchema);