const User = require("../models/userModel");

const createNewUser = ({
  firstName,
  lastName,
  userName,
  email,
  password,
  status,
}) => {
  const user = new User({
    firstName,
    lastName,
    userName,
    email,
    password,
    status,
  });
  return user.save();
};

module.exports = {
  createNewUser,
};
