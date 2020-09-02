const router = require("express").Router();
const appointmentcontroller = require("../../controllers/appointmentcontrollers");
const loginControllers = require("../../controllers/logincontrollers");

router.route("/").post(appointmentcontroller.create);
router
  .route("/")
  .get(loginControllers.allowIfLoggedin, appointmentcontroller.findAll);
router.route("/:id").delete(appointmentcontroller.remove);
router.route("/:id").get(appointmentcontroller.findOne);

module.exports = router;
