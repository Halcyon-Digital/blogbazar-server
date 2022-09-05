const { createNewBlog } = require("../service/blog");

const createBlog = async (req, res) => {
  const { title, description } = req.body;
  const { filename } = req.file;

  if (!title || !description) {
    return res.status(400).json({ message: "Invalid Data!" });
  }
  try {
    await createNewBlog({
      title,
      description,
      user: req.userId,
      image: filename,
    });

    return res.status(201).json({
      message: "Blog Created Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlog,
};
