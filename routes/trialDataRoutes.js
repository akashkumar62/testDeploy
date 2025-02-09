const express = require("express");
const trialDataController = require("../controllers/trialDataController");

const router = express.Router();

router.post("/record", trialDataController.recordTrialData);
router.get("/visit/:visitId", trialDataController.getTrialDataByVisit);

module.exports = router;