const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  participantId: { type: mongoose.Schema.Types.ObjectId, ref: "Participant", required: true },
  visitDate: { type: Date, required: true },
  scheduledBy: { type: String, required: true }, // CRC username
});

module.exports = mongoose.model("Visit", visitSchema);