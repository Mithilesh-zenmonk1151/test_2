const router = require("express").Router();
const { userController } = require("../controller");
router.post("/signup", userController.register );
router.post("/login", userController.login );
router.get("/users/search",userController.getUsers)
module.exports = router;
