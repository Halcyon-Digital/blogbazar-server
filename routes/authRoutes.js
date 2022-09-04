const express = require("express");
const { register, login } = require("../controller/auth");
const router = express.Router();

// @desc    Register User
// @route   POST /api/v1/auth/reg
// @access  Public
router.post("/reg", register);

// @desc    Login User
// @route   POST /api/v1/auth/login
// @access  Public
router.post("/login", login);

module.exports = router;
