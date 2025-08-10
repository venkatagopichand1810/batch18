const fs = require("fs");
const path = require("path");

// path using path module

const dirpath = path.join(__dirname, "services", "pathservice");

fs.mkdir(dirpath, {recursive: true}, (err) => {
    console.log("created")
})


const fileInsideFolder = path.join(dirpath, "service.js");

fs.writeFile(fileInsideFolder, "var a = a + b", "utf-8", (err) => {
    if(err){
        console.log("error writing the file")
    }
    console.log("file created inside the components")

})

