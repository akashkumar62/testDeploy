const TrialData = require("../models/TrialData");
const Visit = require("../models/Visit");

// Record trial data for a visit
exports.recordTrialData = async (req, res) => {
  try {
    const { visitId, heartRate, bloodPressure, respiratoryRate, bodyTemperature, oxygenSaturation, weight, height } = req.body;

    // Check if visit exists
    const visit = await Visit.findById(visitId);
    if (!visit) {
      return res.status(404).json({ message: "Visit not found" });
    }

    const trialData = new TrialData({
      visitId,
      heartRate,
      bloodPressure,
      respiratoryRate,
      bodyTemperature,
      oxygenSaturation,
      weight,
      height,
    });
    await trialData.save();
    res.status(201).json({ message: "Trial data recorded successfully", trialData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get trial data for a visit
exports.getTrialDataByVisit = async (req, res) => {
  try {
    const { visitId } = req.params;
    const trialData = await TrialData.find({ visitId }).populate("visitId");
    res.status(200).json(trialData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};