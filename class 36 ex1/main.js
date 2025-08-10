// built modules
// http module -> built in package used to create the server

// import the built in http module
const http = require("http");

//define the port number where the server should run 
const PORT = 5009;

// create the server using "createServer"
const server = http.createServer((req, res) => {
    // set the response header
    res.writeHead(200, {"Content-Type" : "text/plain"})

    // send the simple response to the client
    res.end("hello this is venkat")
})

server.listen(PORT, () => {
    console.log("server is running")
})



