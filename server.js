const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const participantRoutes = require("./routes/participantRoutes");
const visitRoutes = require("./routes/visitRoutes");
const trialDataRoutes = require("./routes/trialDataRoutes");
const cors = require("cors");


app.use(
  cors({
    origin: "http://localhost:5174",  // Replace with your frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
const dotenv = require("dotenv")
dotenv.config();
const app = express();


app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/participants", participantRoutes);
app.use("/visits", visitRoutes);
app.use("/trial-data", trialDataRoutes);


// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});