const Participant = require("../models/Participant");

// Enroll a new participant
exports.enrollParticipant = async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).json({ message: "Participant enrolled successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all participants
exports.getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};