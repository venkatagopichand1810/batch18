const express = require("express"); //import express module

const app = express(); //this will create the express app

app.use((req, res, next) => {
    console.log("middlware called for every method")
    next()
})


app.use("/about",  (req, res) => {
    res.send("about page")
})

app.use((req, res, next) => {
    // res.send("home page");
   console.log("home middleware")
   next()
})


app.listen(5002,  () => {
    console.log("server is running")
})