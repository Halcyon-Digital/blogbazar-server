const bcrypt = require("bcrypt");
const { createNewUser } = require("./user");

const registerService = async ({
  firstName,
  lastName,
  userName,
  email,
  password,
  status,
  avatar,
}) => {
  //   Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return createNewUser({
    firstName,
    lastName,
    userName,
    email,
    password: hashedPassword,
    status,
    avatar,
  });
};

module.exports = {
  registerService,
};
