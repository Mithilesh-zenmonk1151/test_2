const router = require("express").Router();
const {  testController } = require("../controller");
router.post("/",  testController.createTest );
router.get("/",testController.getTest);
router.put("/:testId",testController.updateTest);

module.exports = router;
