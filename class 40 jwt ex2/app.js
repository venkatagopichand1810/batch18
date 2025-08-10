
const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./config/db");

dotenv.config()

connectDB();

const app = express();

app.use(express.json())

const authRoutes = require("./routes/authRoutes")

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("server is running")
})