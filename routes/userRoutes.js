const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { registerService } = require("../service/auth");
const generateToken = require("../service/token");

router.post("/auth/reg", async (req, res) => {
  const { firstName, lastName, userName, email, password, status } = req.body;
  if (!firstName || !lastName || !userName || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  try {
    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "user already exits" });
    }

    const user = await registerService({
      firstName,
      lastName,
      userName,
      email,
      password,
      status,
    });

    return res.status(201).json({
      message: "User Created Successfully",
      user,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
