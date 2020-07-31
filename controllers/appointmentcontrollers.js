const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req.body);
    db.Appointments.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Appointments.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
