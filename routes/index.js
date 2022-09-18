const router = require("express").Router();
const authRoutes = require("./authRoutes");
const blogRoutes = require("./blogRoutes");
const healthRoute = require("./health");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/health", healthRoute);
router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/blogs", blogRoutes);
router.use("/api/v1/users", userRoutes);
router.use("/api/v1/comments", commentRoutes);

module.exports = router;
