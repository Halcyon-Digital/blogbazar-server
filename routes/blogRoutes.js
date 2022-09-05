const { createBlog } = require("../controller/blog");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");
const router = require("express").Router();

// @desc    Register User
// @route   POST /api/v1/blog/create
// @access  Private
router.post("/create", protect, uploadImage, createBlog);

module.exports = router;
