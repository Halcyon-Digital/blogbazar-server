const {
  createNewBlog,
  findBlog,
  deleteSingleBlog,
} = require("../service/blog");
const User = require("../models/userModel");
const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  const { title, description } = req.body;
  const { filename } = req.file;

  if (!title || !description || !filename) {
    return res.status(400).json({ message: "Invalid Data!" });
  }
  try {
    const newBlog = await createNewBlog({
      title,
      description,
      user: req.userId,
      image: filename,
    });

    // Relation with todo/user
    await User.updateOne(
      {
        _id: req.userId,
      },
      {
        $push: {
          blogs: newBlog._id,
        },
      }
    );

    return res.status(201).json({
      message: "Blog Created Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const allBlogs = async (_req, res) => {
  try {
    const blogs = await findBlog();

    res.status(200).json({ message: "blogs are get Successfully", blogs });
  } catch (error) {
    console.log(error);
  }
};

const getBlog = async (req, res) => {
  const { blogId } = req.params;

  const data = await Blog.findById({ _id: blogId }).populate("comments user");

  res.status(201).json(data);
};

const createLike = async (req, res) => {
  const { blogId } = req.params;
  const { userId } = req;

  try {
    const findBlog = await Blog.findById({ _id: blogId });

    const expireUserId = findBlog.likes.includes(userId);
    if (expireUserId) {
      return res.status(400).json({ message: "Already Liked!" });
    }

    await Blog.findByIdAndUpdate(
      { _id: blogId },
      {
        $push: {
          likes: userId,
        },
      }
    );
    res.status(201).json({ message: "Liked" });
  } catch (error) {}
};

const deleteBlog = async (req, res) => {
  const { userId } = req.params;
  try {
    await deleteSingleBlog(userId);

    res.status(203).json({ message: "Blog delete successful." });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlog,
  allBlogs,
  deleteBlog,
  createLike,
  getBlog,
};
