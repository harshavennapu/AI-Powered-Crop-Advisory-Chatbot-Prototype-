const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
} = require("../controllers/userController");

router.get("/search", protect, searchUsers);

router.get("/", protect, getAllUsers);

router.get("/:id", protect, getUserById);

router.put("/:id", protect, updateUser);

router.delete("/:id", protect, deleteUser);

module.exports = router;