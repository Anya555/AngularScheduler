const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/appointments")
  .then(() => {
    console.log("Connected to the Database successfully");
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path_join(__dirname, "index.html")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "my-app", "build", "index.html"));
  });
}

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
