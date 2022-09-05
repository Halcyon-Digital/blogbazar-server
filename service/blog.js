const Blog = require("../models/blogModel");

const createNewBlog = ({ title, description, user, image }) => {
  const blog = new Blog({ title, description, user, image });

  return blog.save();
};
module.exports = {
  createNewBlog,
};
