const express = require("express"); //import the expres module

const app = express(); //creating the express app

const sync = require("./middlware/sync");

const asyncLogger = require("./middlware/asyncLogger");
const checkUser = require("./middlware/checkuser")

// middleware

 //aysnc.....it is blocking
 //next()
 app.use(sync);
 app.use(asyncLogger);
 app.use(checkUser)






app.get("/home", (req, res) => {
    res.send("Welcome to the home page")
})


app.get("/about", (req, res) => {
    res.send("Welcome to the about page")
})


app.get("/contact", (req, res) => {
    res.send("Welcome to the contact page")
})

app.use("/productPage", (req, res) => {
    res.send("Welcome to the product page")
})
// start the server
app.listen(5001, () => {
    console.log("Server is running")
})
