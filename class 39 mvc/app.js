const express = require("express");
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")

const app = express(); //to create the express application
const PORT = 5009;

// connectDB
connectDB();

// middlware when post the data in the request body
app.use(express.json())

app.use("/users",  userRoutes); //routes

app.listen(PORT, () => {
    console.log("server is running at port 5004")
})


// localhost:5009/users/getcall

// localhost:5009/users/postcall