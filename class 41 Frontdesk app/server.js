const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json())

connectDB();

app.use("/api/auth", require("./routes/authRoutes")); //api routing path for auth for register or login
app.use("/api/bookings", require("./routes/bookingRoutes")) //api routing path for bookings

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})


// post: api/auth/register -> register Admin, Mangager and receptionist

//post: /api/auth/login -> get jwt token

// post: /api/bookings -> authenticated booking

// Get: /api/bookings -> view bookings( admin and manager only)