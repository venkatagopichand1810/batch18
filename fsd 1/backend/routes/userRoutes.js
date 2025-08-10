
const express = require("express");
const {registerUser, loginUser, getUsers} = require("../controllers/userController");

// init the router
const router = express.Router();

// define the routes for the controller
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getusers", getUsers);

module.exports = router;