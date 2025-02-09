const express = require("express");
const participantController = require("../controllers/participantController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/enroll", participantController.enrollParticipant);
router.get("/", participantController.getAllParticipants);

module.exports = router;