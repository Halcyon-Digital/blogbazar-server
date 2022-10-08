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
    sortDescription: {
      type: String,
      required: [true, "Sort Description is required."],
      minlength: 40,
    },
    image: {
      type: String,
      required: [true, "Please add an image."],
    },
    tags: String,
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
