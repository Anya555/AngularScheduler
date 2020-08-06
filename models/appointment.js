const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  date: {
    year: {
      type: Number,
    },
    month: {
      type: Number,
    },
    day: {
      type: Number,
    },
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

const Appointments = mongoose.model("Appointments", AppointmentSchema);
module.exports = Appointments;
