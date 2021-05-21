const mongoose = require("mongoose");

const InfoSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
});

const InfoModel = mongoose.model("Info", InfoSchema);

module.exports = { InfoSchema, InfoModel };
