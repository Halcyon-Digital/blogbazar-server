const User = require("../models/userModel");

const createNewUser = ({
  firstName,
  lastName,
  userName,
  email,
  password,
  status,
  avatar,
}) => {
  const user = new User({
    firstName,
    lastName,
    userName,
    email,
    password,
    status,
    avatar,
  });
  return user.save();
};

module.exports = {
  createNewUser,
};
