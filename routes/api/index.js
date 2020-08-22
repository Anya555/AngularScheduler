const router = require("express").Router();
const appointmentRoutes = require("./appoinntmentApi");
const loginRoutes = require("./loginApi");
const nodemailerRoutes = require("./nodemailerApi");

router.use("/appointments", appointmentRoutes);
router.use("/login", loginRoutes);
router.use("/nodemailer", nodemailerRoutes);
module.exports = router;
