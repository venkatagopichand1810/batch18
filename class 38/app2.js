const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); //middleware to parse the JSON response

// middleware to check the role
function checkRole(allowedRoles = []){
    // return the middlware function
    //checkRole [admin, user]
    return (req, res, next) => {
        // header
        const userRole = req.header("role");

        // if no role is present or Users role is not in the allowedRoles
        if(!userRole || !allowedRoles.includes(userRole)){
            return res.status(403).json({message: "Access is denied: unauthorized role"})
        }

        // if the role is allowed, continue to the next route or middleware
        next();
    }
}

app.get("/public", (req,res) => {
    res.send("Accessbile to any user")
})

app.get("/user", checkRole(["user", "admin"]), (req, res) => {
    res.send("Accessbile to user and admin")
})

app.get("/admin", checkRole(["admin"]), (req, res) => {
    res.send("Accessbile only to admin user")
})

app.listen(PORT, () => {
    console.log("server is running")
})


