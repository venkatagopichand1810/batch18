const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    customerName: String, 
    service: String, 
    date: Date, 
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
})

module.exports = mongoose.model("Booking", bookingSchema)

// this booking was created by the user and user ID:

// {
//     "_id" : "dfdfdf",
//     "customerName": "venkat",
//     "serive": "spa",
//     "date": "2025-04-15",
//     "createdby: "346y3984739473794934038943048"
// }-

// booking.index({createdBy: id)