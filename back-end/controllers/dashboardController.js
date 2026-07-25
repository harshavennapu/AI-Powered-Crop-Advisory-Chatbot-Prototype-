const Crop = require("../models/Crop");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
  try {
    const cropCount = await Crop.countDocuments();
    const userCount = await User.countDocuments();

    res.status(200).json({
      success: true,
      stats: {
        crops: cropCount,
        users: userCount,
        aiFeatures: 4, // Number of AI features in the application
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard statistics",
    });
  }
};

module.exports = {
  getDashboardStats,
};