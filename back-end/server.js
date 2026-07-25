const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const connectDB = require("./config/db");

// Passport Config
require("./config/passport");

const marketRoutes = require("./routes/marketRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const aiRoutes = require("./routes/aiRoutes");
const cropRoutes = require("./routes/cropRoutes");
const pestRoutes = require("./routes/pestRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();

// ======================
// Database Connection
// ======================
connectDB();

// ======================
// Middleware
// ======================
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ======================
// Routes
// ======================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/crops", cropRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/pests", pestRoutes);
app.use("/api/dashboard", dashboardRoutes);
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