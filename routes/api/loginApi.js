const router = require("express").Router();
const loginControllers = require("../../controllers/logincontrollers");

router.route("/signup").post(loginControllers.signup);

router.route("/login").post(loginControllers.login);

module.exports = router;
