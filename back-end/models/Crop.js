const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    soil: {
      type: String,
      required: true,
    },
    fertilizer: {
      type: String,
      required: true,
    },
    water: {
      type: String,
      required: true,
    },
    yield: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", cropSchema);