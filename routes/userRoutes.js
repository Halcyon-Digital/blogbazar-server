const { getMe, allUsers, updateUser } = require("../controller/user");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");

const router = require("express").Router();

// @desc    User Info
// @route   GET /api/v1/users/me
// @access  Private
router.get("/me", protect, getMe);

// @desc    User Info
// @route   GET /api/v1/users/me
// @access  Private
router.get("/all", protect, allUsers);

router.put("/:userId", protect, uploadImage, updateUser);

module.exports = router;
