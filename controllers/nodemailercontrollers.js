const db = require("../models");
const nodemailer = require("nodemailer");

module.exports = {
  handleEmail: (req, res) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "annapanas0906@gmail.com",
        pass: process.env.PASSWORD,
      },
    });

    const { name, email, date, time, _id } = req.body;

    let mailOptions = {
      from: "annapanas0906@gmail.com",
      to: email,
      subject: `You received new email from annapanas0906@gmail.com`,
      text: `Dear ${name},  \n\n Your appointment has been confirmed for ${
        date.day + "/" + date.month + "/" + date.year
      } at ${time + ":00"},
      \n\n  to cancel appointment click here "http://localhost:4200/appointment/${_id}"
       \n\n Best regards.`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(500).json({
          status: err,
        });
      } else {
        res.status(200).json({
          status: info.response,
        });
      }
    });
  },
};
