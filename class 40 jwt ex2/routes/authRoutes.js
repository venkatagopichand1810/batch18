const express = require("express");
const router = express.Router();
const{login, adminAccess} = require("../controllers/authController");

router.post("/login", login); //login user and admin can login
router.get("/admin", adminAccess); //where only admin can access
// router.get("/user", userroute); //amdin and usr can access

module.exports = router