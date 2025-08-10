
const express = require("express");
const jwt = require("jsonwebtoken");


// create the express app
const app = express(); //init the express app
app.use(express.json()); //parse the json request body 

const SECRET_KEY = "SHDFKSDFHKSFJLSDFKSDHFKLSDFJSKDJHFDFDHKFDH";

app.post("/login", (req, res) => {
   
    const user =  {
        id: 1, 
        username: "user",
        email: "user@gmail.com"
    }

    // generate the jwt token 
    const token = jwt.sign(user, SECRET_KEY, {expiresIn: "1h"})

    // send token to the client
    res.json({token})
})

const port = 5007;
app.listen(port, () => {
    console.log("server is running")
})


// 

// admin and user
// user can access only user things
// admin can access both admin and user page