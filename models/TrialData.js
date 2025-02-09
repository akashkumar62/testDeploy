const mongoose = require("mongoose");

const trialDataSchema = new mongoose.Schema({
  visitId: { type: mongoose.Schema.Types.ObjectId, ref: "Visit", required: true },
  heartRate: { type: Number },
  bloodPressure: { type: String },
  respiratoryRate: { type: Number },
  bodyTemperature: { type: Number },
  oxygenSaturation: { type: Number },
  weight: { type: Number },
  height: { type: Number },
});

module.exports = mongoose.model("TrialData", trialDataSchema);