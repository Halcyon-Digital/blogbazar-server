const router = require("express").Router();
const authRoutes = require("./authRoutes");
const blogRoutes = require("./blogRoutes");
const healthRoute = require("./health");

router.use("/health", healthRoute);
router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/blog", blogRoutes);

module.exports = router;
