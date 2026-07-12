const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Maximum 5 requests
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login/register attempts. Please try again after 15 minutes.",
  },
});

module.exports = authLimiter;