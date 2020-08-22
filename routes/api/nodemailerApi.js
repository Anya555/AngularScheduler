const router = require("express").Router();
const nodemailerControllers = require("../../controllers/nodemailercontrollers");

router.route("/").post(nodemailerControllers.handleEmail);
module.exports = router;
