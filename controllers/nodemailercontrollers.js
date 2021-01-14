const db = require("../models");
const nodemailer = require("nodemailer");
const moment = require("moment");

module.exports = {
  handleEmail: (req, res) => {
    let transporter = nodemailer.createTransport({
      service: "outlook",
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "justbookit0@outlook.com",
        pass: process.env.PASSWORD,
      },
    });

    const { name, email, date, time, _id } = req.body;
    let newDate = moment(date).format("LL");

    let mailOptions = {
      from: "justbookit0@outlook.com",
      to: email,
      subject: `You received new email from justbookit0@outlook.com`,

      html: `<p>Dear ${name},  
      <br><br>
      Your appointment has been confirmed for ${newDate} at ${time + ":00"}. 
      <br><br>
      To cancel appointment <a href="https://angular-scheduler.herokuapp.com/appointment/${_id}">click here.</a>
      <br><br>
      Best regards.
      </p>`,
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
