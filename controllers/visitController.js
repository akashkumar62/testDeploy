const Visit = require("../models/Visit");
const Participant = require("../models/Participant");

// Schedule a visit for a participant
exports.scheduleVisit = async (req, res) => {
  try {
    const { participantId, visitDate, scheduledBy } = req.body;

    // Check if participant exists
    const participant = await Participant.findById(participantId);
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    const visit = new Visit({ participantId, visitDate, scheduledBy });
    await visit.save();
    res.status(201).json({ message: "Visit scheduled successfully", visit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all visits for a participant
exports.getVisitsByParticipant = async (req, res) => {
  try {
    const { participantId } = req.params;
    const visits = await Visit.find({ participantId }).populate("participantId");
    res.status(200).json(visits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};