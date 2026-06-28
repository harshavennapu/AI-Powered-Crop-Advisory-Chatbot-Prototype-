const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
} = require("../controllers/userController");

// 🔥 IMPORTANT: put SEARCH FIRST
router.get("/search", searchUsers);

// CRUD routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;