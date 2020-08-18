const router = require("express").Router();
const appointmentroutes = require("./appoinntmentApi");
const loginRoutes = require("./login");

router.use("/appointments", appointmentroutes);
router.use("/login", loginRoutes);
module.exports = router;
