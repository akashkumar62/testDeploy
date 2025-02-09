const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female", "Non-Binary"], required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  healthStatus: { type: String },
});

module.exports = mongoose.model("Participant", participantSchema);

