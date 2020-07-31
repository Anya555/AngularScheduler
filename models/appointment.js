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
    hour: {
      type: Number,
    },
    minute: {
      type: Number,
    },
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
