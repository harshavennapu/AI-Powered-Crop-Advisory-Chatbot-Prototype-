const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
  getProfile,
  updateProfile,
} = require("../controllers/userController");
router.get("/search", protect, searchUsers);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.get("/", protect, getAllUsers);
router.get("/:id", protect, getUserById);

router.put("/:id", protect, updateUser);

router.delete("/:id", protect, deleteUser);

module.exports = router;