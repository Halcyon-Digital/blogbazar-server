const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 12,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 12,
    },
    userName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "user email is required"],
      trim: true,
      validate: {
        validator: function (v) {
          return v.endsWith(".com");
        },
        message: "Invalid email formats",
      },
    },
    password: {
      type: String,
      required: [true, "user password is required"],
      minlength: 6,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
