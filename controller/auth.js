const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { registerService } = require("../service/auth");
const generateToken = require("../service/token");

const register = async (req, res) => {
  const { filename } = req.file;
  const { firstName, lastName, email, password, status } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  try {
    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "user already exits" });
    }

    const user = await registerService({
      firstName,
      lastName,
      userName: `${firstName} ${lastName}`,
      email,
      password,
      status,
      avatar: filename,
    });

    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      status: user.status,
      avatar: user.avatar,
    };

    return res.status(201).json({
      ...userData,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  // Check for user email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User Not Found!" });
  }

  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    status: user.status,
    avatar: user.avatar,
  };

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      ...userData,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid Password" });
  }
};

module.exports = {
  register,
  login,
};
