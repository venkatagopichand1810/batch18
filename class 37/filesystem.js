
const fs = require("fs");

// fs.writeFile("kavitha1.txt", "React dev", "utf-8", (err) => {
//     console.log("file written successfully")

// })

// fs.appendFile("kavitha1.txt", "\nMERN STACK DEV", "utf-8", (err) => {
//     console.log("content appended successffully")
// })

// fs.rename("kavitha1.txt", "thamarai.txt", (err) => {
//     console.log("changed the file name")
// })

// fs.unlink("kavitha.txt", (err) => {
//     if(err) {
//         console.log("not able to delete")
//     }
//     console.log("file deleted successfully")
// })

// fs.mkdir("components", (err) => {
//     console.log("created")
// })

// fs.rmdir("components", (err) => {
//       console.log("deleted")
// })

fs.mkdir("components/header", {recursive: true}, (err) => {
    console.log("created")
})

fs.writeFile("components/header/header.html", "hello madam", "utf-8", (err) => {
    if(err){
        console.log("error writing the file")
    }
    console.log("file created inside the components")

})