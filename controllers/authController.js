const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

exports.registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    jwt.sign({ user }, process.env.JWT_SECRET, (error, token) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(201).json({ message: "User registered successfully", token });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a new token for the logged-in user
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    res.status(200).json({ message: "Login successful", token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};