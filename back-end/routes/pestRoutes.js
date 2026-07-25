const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    pests: [
      {
        id: 1,
        name: "Stem Borer",
        symptoms: "Dead hearts, white ears, damaged stems.",
        treatment: "Apply Chlorantraniliprole or use pheromone traps."
      },
      {
        id: 2,
        name: "Aphids",
        symptoms: "Curled leaves, sticky honeydew on plants.",
        treatment: "Spray Neem Oil or Imidacloprid."
      },
      {
        id: 3,
        name: "Whitefly",
        symptoms: "Yellowing leaves and reduced plant growth.",
        treatment: "Use Yellow Sticky Traps or Neem Oil."
      },
      {
        id: 4,
        name: "Armyworm",
        symptoms: "Large holes in leaves and severe crop damage.",
        treatment: "Use Spinosad or biological pesticides."
      }
    ]
  });
});

module.exports = router;