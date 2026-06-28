const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// ======================
// DB Connection
// ======================
connectDB();

// ======================
// Middleware
// ======================
app.use(cors());
app.use(express.json());

// ======================
// Routes
// ======================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); // ✅ FIXED HERE

// ======================
// Test Route
// ======================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🌱 AgroAI Backend is Running!",
  });
});

// ======================
// Start Server
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});