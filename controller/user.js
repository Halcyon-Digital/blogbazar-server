const User = require("../models/userModel");

const getMe = async (req, res) => {
  const data = await User.findById({
    _id: req.user._id,
  }).populate("blogs");
  res.status(200).json(data);
};

const allUsers = async (_req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const userInfo = req.body;
  const userImage = req.file;

  const userData = { ...userInfo, image: userImage.filename };
  try {
    await User.findByIdAndUpdate({ _id: userId }, { $set: userData });

    res.status(200).json({
      message: "User ware Updated Successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMe, allUsers, updateUser };
