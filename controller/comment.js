const Comment = require("../models/commentModel");
const Blog = require("../models/blogModel");

const createComments = async (req, res) => {
  const { comment, blogId } = req.body;
  const { userName, avatar } = req.user;
  const commentInfo = { comment, userName, avatar };

  const newComment = new Comment(commentInfo);

  try {
    const comment = await newComment.save();

    await Blog.findByIdAndUpdate(
      { _id: blogId },
      {
        $push: {
          comments: comment,
        },
      }
    );

    res.status(201).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createComments };
