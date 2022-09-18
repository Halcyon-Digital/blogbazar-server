const mongoose = require("mongoose");

const blogModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      minlength: 80,
    },
    image: {
      type: String,
      required: [true, "Please add an image."],
    },
    tags: Array,
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        comment: String,
        userName: String,
        avatar: String,
      },
    ],
    likes: [{ type: mongoose.Types.ObjectId }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogModel);
