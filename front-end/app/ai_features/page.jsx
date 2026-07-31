"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modal from "@/components/ui/Modal";

const features = [
  {
    title: "🌱 AI Crop Advisory",
    description:
      "Receive intelligent crop recommendations based on soil type, weather conditions, and seasonal trends.",
    details:
      "AI analyzes soil, weather, crop season, and farming practices to recommend the best crops and improve productivity.",
  },
  {
    title: "☁️ Weather Forecast",
    description:
      "Get accurate weather predictions to plan irrigation, sowing, and harvesting activities.",
    details:
      "Weather forecasts help farmers plan irrigation, harvesting, pesticide spraying, and reduce crop losses.",
  },
  {
    title: "🐛 Pest Detection",
    description:
      "Identify crop diseases and pests using AI-powered image analysis and treatment suggestions.",
    details:
      "Upload crop images to detect pests early and receive treatment recommendations from AI.",
  },
  {
    title: "🌾 Soil Analysis",
    description:
      "Analyze soil nutrients and receive fertilizer recommendations for better crop yield.",
    details:
      "Soil nutrient analysis recommends fertilizers and improves soil fertility for higher crop production.",
  },
  {
    title: "📈 Market Price Prediction",
    description:
      "Track current crop prices and market trends to make informed selling decisions.",
    details:
      "View market prices and trends to decide the best time and place to sell agricultural products.",
  },
  {
    title: "💧 Smart Irrigation",
    description:
      "Optimize water usage with AI-based irrigation scheduling and moisture monitoring.",
    details:
      "AI recommends irrigation schedules based on weather forecasts and soil moisture to save water.",
  },
];

export default function AIFeaturesPage() {
  const router = useRouter();

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  const handleLearnMore = (feature) => {
    setSelectedFeature(feature);
    setIsOpen(true);
  };

  const generateAIResponse = async () => {
    if (!prompt.trim()) {
      setError("Please enter a farming question.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch(
        " =https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com/api/ai/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResponse(data.response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="rounded-3xl border border-green-300/30 bg-linear-to-r from-green-900/80 via-emerald-800/80 to-green-700/80 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-yellow-300">
            🤖 AI Farming Features
          </h1>

          <p className="mt-4 text-lg text-green-100">
            Explore intelligent services offered by AgroAI to help farmers make
            better agricultural decisions.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-green-300/30 bg-white/10 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-yellow-300">
                {feature.title}
              </h2>

              <p className="mt-4 text-green-100">{feature.description}</p>

              <button
                onClick={() => handleLearnMore(feature)}
                className="mt-6 rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-green-900 hover:bg-yellow-300"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* AI Section */}

        <div className="mt-16 rounded-2xl border border-green-300/30 bg-white/10 p-8 shadow-xl backdrop-blur-md">
          <h2 className="text-3xl font-bold text-yellow-300">🌱 Ask AgroAI</h2>

          <p className="mt-2 text-green-100">
            Ask any agriculture-related question and receive an AI-powered
            response.
          </p>

          <textarea
            rows={6}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example:
• How can I improve rice crop yield?
• Suggest crops for black soil.
• Best fertilizer for maize."
            className="mt-6 w-full rounded-2xl border-2 border-green-400 bg-green-950/70 p-5 text-white placeholder:text-green-300 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => setPrompt("How can I improve rice crop yield?")}
              className="rounded-full bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-600"
            >
              Rice Yield
            </button>

            <button
              onClick={() => setPrompt("Best fertilizer for maize")}
              className="rounded-full bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-600"
            >
              Maize Fertilizer
            </button>

            <button
              onClick={() => setPrompt("Suggest crops for black soil")}
              className="rounded-full bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-600"
            >
              Black Soil
            </button>
          </div>
          <button
            onClick={generateAIResponse}
            disabled={loading}
            className="mt-6 rounded-xl bg-linear-to-r from-yellow-400 to-orange-400 px-8 py-3 font-bold text-green-900 transition hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "🤖 Generating..." : "🚀 Generate AI Response"}
          </button>
          {loading && (
            <div className="mt-6 rounded-xl border border-blue-400 bg-blue-900/20 p-5 text-blue-200">
              🤖 AgroAI is analyzing your question...
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-lg bg-red-600 p-4 text-white">
              {error}
            </div>
          )}

          {response && (
            <div className="mt-8 rounded-2xl border border-green-400 bg-green-900/20 p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-yellow-300">
                🌱 AI Recommendation
              </h3>

              <p className="whitespace-pre-wrap leading-8 text-green-100">
                {response}
              </p>
            </div>
          )}
        </div>

        {/* Modal */}

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedFeature && (
            <>
              <h2 className="mb-4 text-3xl font-bold text-green-700">
                {selectedFeature.title}
              </h2>

              <p className="mb-4 text-gray-700">
                {selectedFeature.description}
              </p>

              <div className="rounded-lg bg-green-50 p-4 text-gray-700">
                <strong>More Information</strong>

                <p className="mt-3">{selectedFeature.details}</p>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </Modal>
      </main>

      <Footer />
    </div>
  );
}
