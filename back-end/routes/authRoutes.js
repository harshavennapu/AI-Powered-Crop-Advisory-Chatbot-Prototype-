const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
  validate,
} = require("../middleware/validationMiddleware");

const authLimiter = require("../middleware/rateLimitMiddleware");

// Test Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth route is working",
  });
});

// Register Route
router.post(
  "/register",
  authLimiter,
  registerValidation,
  validate,
  registerUser
);

// Login Route
router.post(
  "/login",
  authLimiter,
  loginValidation,
  validate,
  loginUser
);
// ======================
// Google OAuth Login
// ======================
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// ======================
// Google OAuth Callback
// ======================
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

     const CLIENT_URL =
  process.env.CLIENT_URL || "http://localhost:3000";

res.redirect(
  `${CLIENT_URL}/login?token=${token}&name=${encodeURIComponent(
    req.user.name
  )}&email=${encodeURIComponent(req.user.email)}`
);
  }
);
module.exports = router;