
// built modules
// http module -> built in package used to create the server

// import the built in http module
const http = require("http");

//define the port number where the server should run 
const PORT = 5009;

// create the server using "createServer"
const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === "/" || path === "/home") {
        //serve html
        // set the response header
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`
            <html>
            <body>
                <h1>Hello world</h1>
                <mark>hello venkat</mark>
            </body> 

            </html>
            
            `)
    } else if (path === '/about') {
        // set the response header
        res.writeHead(200, { "Content-Type": "text/plain" })

        // send the simple response to the client
        res.end("welcome to about page")
    } else if (path === "/api/data") {
        //serve json
        const data = {
            name: 'venkat',
            class: "node js"
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data))
    }

})

server.listen(PORT, () => {
    console.log("server is running")
})



