const Blog = require("../models/blogModel");

const createNewBlog = ({ title, description, user, image }) => {
  const blog = new Blog({ title, description, user, image });

  return blog.save();
};

const findBlog = () => {
  const allBlog = Blog.find({}).populate("comments");

  return allBlog;
};
const deleteSingleBlog = (id) => {
  return Blog.deleteOne({ _id: id });
};
module.exports = {
  createNewBlog,
  findBlog,
  deleteSingleBlog,
};
