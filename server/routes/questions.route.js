const router = require("express").Router();
const { questionsController } = require("../controller");
console.log("router")
router.post("/:testId", questionsController.addQuestions);
router.get("/:testId", questionsController.getQuestions);

module.exports = router;
