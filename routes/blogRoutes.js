const {
  createBlog,
  allBlogs,
  deleteBlog,
  createLike,
  getBlog,
} = require("../controller/blog");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");
const router = require("express").Router();

// @desc    Get all Blogs
// @route   GET /api/v1/blogs
// @access  Public
router.get("/", allBlogs);

// @desc    Get  Blogs by ID
// @route   GET /api/v1/blogs/:blogId
// @access  Public
router.get("/:blogId", getBlog);

// @desc    Create Blog
// @route   POST /api/v1/blogs/create
// @access  Private
router.post("/create", protect, uploadImage, createBlog);

// @desc    Create Like
// @route   POST /api/v1/blogs/like/:blogId
// @access  Private
router.put("/like/:blogId", protect, createLike);

// @desc    Delete Blog
// @route   POST /api/v1/blogs/:userId
// @access  Private
router.delete("/:userId", protect, deleteBlog);

module.exports = router;
