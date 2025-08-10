
// import the express module
const express = require("express");
// create the instance of express app...
const app = express();

//define the port number
const PORT = 5009;

// middleware to parse json response
app.use(express.json())

// define api endpoint use get
app.get("/api/welcome", (req, res) => {
    res.json({
        mesage: "hello welcome to the home page"
    })
})

app.get("/api/about", (req, res) => {
    res.json({
        mesage: "hello welcome to the about page"
    })
})


app.get("/api/contact", (req, res) => {
    res.json({
        mesage: "hello welcome to the contact page"
    })
})

// post

app.post('/api/users', (req, res) => {
    const{name, email, password} = req.body;
    res.status(201).json({
        message: "User is created successfully",
        user: {name, email, password}
    })
})


// start the server and listen to the port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})