const router = require("express").Router();
const appointmentcontroller = require("../../controllers/appointmentcontrollers");

router.route("/").post(appointmentcontroller.create);
router.route("/").get(appointmentcontroller.findAll);

module.exports = router;
