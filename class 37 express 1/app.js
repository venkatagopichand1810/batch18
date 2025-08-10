const express = require("express"); //import the expres module

const app = express(); //creating the express app

const serverlogs = require("./middleware/serverlogs");

const blockSaturday = require("./middleware/blockSaturday");

const blockMonday = require("./middleware/blockmonday");

const blockTue = require("./middleware/blockTue")

// middleware
app.use(serverlogs); //next()
app.use(blockSaturday);
app.use(blockMonday);
app.use(blockTue);

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
