const router = require("express").Router();
const appointmentcontroller = require("../../controllers/appointmentcontrollers");

router.route("/").post(appointmentcontroller.create);
router.route("/").get(appointmentcontroller.findAll);
router.route("/:id").delete(appointmentcontroller.remove);
router.route("/:id").get(appointmentcontroller.findOne);

module.exports = router;
