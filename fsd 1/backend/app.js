
// create the server
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors")

dotenv.config(); //to load the env var

// create the express app
const app = express();

// middleware to parse the json 
app.use(express.json());


// connect to db
connectDB();

//middleware to handle cross origin problem
app.use(cors())

//use the user routes
app.use("/api/users", userRoutes);

const port = process.env.PORT; 

app.listen(port, () => {
       console.log(`server is running at http://localhost:${port}`)
})