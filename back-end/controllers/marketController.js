const getMarketPrices = (req, res) => {
  const marketPrices = [
    {
      id: 1,
      crop: "Rice",
      price: "₹2,450 / Quintal",
      trend: "Increasing",
    },
    {
      id: 2,
      crop: "Maize",
      price: "₹2,150 / Quintal",
      trend: "Slightly Down",
    },
    {
      id: 3,
      crop: "Wheat",
      price: "₹2,800 / Quintal",
      trend: "Stable",
    },
    {
      id: 4,
      crop: "Groundnut",
      price: "₹6,750 / Quintal",
      trend: "Increasing",
    },
    {
      id: 5,
      crop: "Onion",
      price: "₹1,900 / Quintal",
      trend: "Decreasing",
    },
    {
      id: 6,
      crop: "Tomato",
      price: "₹2,300 / Quintal",
      trend: "High Demand",
    },
  ];

  res.status(200).json({
    success: true,
    marketPrices,
  });
};

module.exports = {
  getMarketPrices,
};