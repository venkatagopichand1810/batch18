const express = require("express");
const router = express.Router(); //for routing purpose we are using the router
const {getUsers, createUser, getUserById} = require("../controller/userController");

router.get("/getcall", getUsers)

// post api
router.post("/postcall", createUser)

router.get("/getcall/:id", getUserById)

module.exports = router