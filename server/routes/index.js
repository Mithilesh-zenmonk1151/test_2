const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("you are in the root route.");
});
router.use("/auth", require("./user.route"));
router.use("/test", require("./test.route"));
router.use("/question", require("./questions.route"));
module.exports = router;
