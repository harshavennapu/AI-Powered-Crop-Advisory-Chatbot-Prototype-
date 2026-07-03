const express = require("express");
const cors =require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// ======================
// Database Connection
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
app.use("/api/users", userRoutes);

// ======================
// Health Check
// ======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🌱 AgroAI Backend is Running!",
  });
});

// ======================
// 404 Handler
// ======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ======================
// Global Error Handler
// ======================
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ======================
// Start Server
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});