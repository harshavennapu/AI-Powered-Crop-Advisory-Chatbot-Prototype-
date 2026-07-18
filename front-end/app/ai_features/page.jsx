"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    title: "🌱 AI Crop Advisory",
    description:
      "Receive intelligent crop recommendations based on soil type, weather conditions, and seasonal trends.",
  },
  {
    title: "☁️ Weather Forecast",
    description:
      "Get accurate weather predictions to plan irrigation, sowing, and harvesting activities.",
  },
  {
    title: "🐛 Pest Detection",
    description:
      "Identify crop diseases and pests using AI-powered image analysis and treatment suggestions.",
  },
  {
    title: "🌾 Soil Analysis",
    description:
      "Analyze soil nutrients and receive fertilizer recommendations for better crop yield.",
  },
  {
    title: "📈 Market Price Prediction",
    description:
      "Track current crop prices and market trends to make informed selling decisions.",
  },
  {
    title: "💧 Smart Irrigation",
    description:
      "Optimize water usage with AI-based irrigation scheduling and moisture monitoring.",
  },
];

export default function AIFeaturesPage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);
  const generateAIResponse = async () => {
    if (!prompt.trim()) {
      setError("Please enter a farming question.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

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
            Explore the intelligent services offered by AgroAI to help farmers
            improve productivity and make data-driven agricultural decisions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-green-300/30 bg-white/10 p-6 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-yellow-300">
                {feature.title}
              </h2>

              <p className="mt-4 text-green-100">{feature.description}</p>

              <button className="mt-6 rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-green-900 transition hover:bg-yellow-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-2xl border border-green-300/30 bg-white/10 p-8 shadow-xl backdrop-blur-md">
          <h2 className="text-3xl font-bold text-yellow-300">🌱 Ask AgroAI</h2>

          <p className="mt-2 text-green-100">
            Ask any agriculture-related question and receive an AI-powered
            answer.
          </p>

          <textarea
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: How can I improve rice crop yield?"
            className="mt-6 w-full rounded-lg border border-green-400 bg-green-950 p-4 text-white outline-none"
          />

          <button
            onClick={generateAIResponse}
            disabled={loading}
            className="mt-5 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-green-900 hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate AI Response"}
          </button>

          {error && (
            <div className="mt-6 rounded-lg bg-red-600 p-4 text-white">
              {error}
            </div>
          )}

          {response && (
            <div className="mt-6 rounded-lg bg-green-900 p-5 text-green-100 whitespace-pre-wrap">
              <h3 className="mb-3 text-xl font-bold text-yellow-300">
                AI Response
              </h3>

              {response}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
