const { createComments } = require("../controller/comment");
const { protect } = require("../middleware/authenticate");

const router = require("express").Router();

// @desc    Create a new comment
// @route   POST /api/v1/comments
// @access  Privet
router.post("/", protect, createComments);

module.exports = router;
