// file system..

//readFileSync (blocking)...sync way of reading the file

// const fs = require('fs'); // import the fs module
// console.log("Start of the file")
// try {
//     const data = fs.readFileSync("notes.txt", "utf-8");

//     console.log("Text is: ", data)

// } catch(err){
//     console.log("error reading the file", err)
// }
// console.log("end of the file")



// non blocking way
const fs = require('fs'); // import the fs module

fs.readFile("venkatesh.text", "utf-8", (err, data) => {
    if(err){
        console.log("error reading the file")
        return;
    }
    console.log("read the file", data)
})

console.log("end of the file")


// non bloking input and output