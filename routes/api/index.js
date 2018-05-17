const router = require("express").Router();
const bookRoutes = require("./foods");

// Book routes
router.use("/foods", foodRoutes);

module.exports = router;
