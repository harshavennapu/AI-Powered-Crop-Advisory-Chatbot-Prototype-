const axios = require("axios");

const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `You are an agricultural expert. Give a short answer (maximum 120 words) in simple English.\n\nQuestion: ${prompt}`,
              },
            ],
          },
        ],
      }
    );

    res.status(200).json({
      success: true,
      response:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

module.exports = {
  generateResponse,
};