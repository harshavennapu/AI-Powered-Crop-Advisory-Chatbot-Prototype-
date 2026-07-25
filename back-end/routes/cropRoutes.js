const express = require("express");
const router = express.Router();

const {
  getAllCrops,
  createCrop,
  updateCrop,
  deleteCrop,
} = require("../controllers/cropController");

router.get("/", getAllCrops);
router.post("/", createCrop);
router.put("/:id", updateCrop);
router.delete("/:id", deleteCrop);

module.exports = router;