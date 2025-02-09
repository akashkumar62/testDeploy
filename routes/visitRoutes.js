const express = require("express");
const visitController = require("../controllers/visitController");

const router = express.Router();

router.post("/schedule", visitController.scheduleVisit);
router.get("/participant/:participantId", visitController.getVisitsByParticipant);

module.exports = router;