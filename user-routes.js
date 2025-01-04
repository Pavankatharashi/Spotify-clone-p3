const express = require("express");
const router = express.Router();

const {RegisterUser, LoginUser} = require("../controllers/userControllers");

router.route("/register").post(RegisterUser);

router.route("/signin").post(LoginUser);

module.exports = router;