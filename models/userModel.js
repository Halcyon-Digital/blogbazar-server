const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 12,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 4,
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
    todos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Todo",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
