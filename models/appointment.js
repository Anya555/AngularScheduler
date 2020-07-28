const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Appointments = mongoose.model("appointment", appointmentSchema);
module.exports = Appointments;
