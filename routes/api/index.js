const router = require("express").Router();
const appointmentroutes = require("./appoinntmentApi");

router.use("/appointments", appointmentroutes);
module.exports = router;
