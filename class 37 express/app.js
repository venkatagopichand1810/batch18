
// const http = require("http");

// const port = 5000;

// const server = http.createServer((req, res) => {
//     res.end("hello world")
// })

// server.listen(port)


const express = require("express"); //import express module

const app = express(); //this will create the express app

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/home", (req, res) => {
    res.send("welcome to home page")
})

app.get("/about", (req, res) => {
    res.send("Welcom to about page")
})

app.use("/contact", (req, res) => {
    res.send("Welcome to contact page")
})

app.listen(5001,  () => {
    console.log("server is running")
})