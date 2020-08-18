const router = require("express").Router();
const loginControllers = require("../../controllers/logincontrollers");

router.route("/").post(loginControllers.login);

module.exports = router;
