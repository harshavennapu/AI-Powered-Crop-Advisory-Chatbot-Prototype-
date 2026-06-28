"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const crops = [
  {
    name: "🌾 Rice",
    season: "Kharif",
    soil: "Clayey Soil",
    fertilizer: "NPK (20-20-20)",
    water: "High",
    yield: "4-6 Tons/Hectare",
  },
  {
    name: "🌽 Maize",
    season: "Kharif & Rabi",
    soil: "Loamy Soil",
    fertilizer: "Urea + DAP",
    water: "Moderate",
    yield: "3-5 Tons/Hectare",
  },
  {
    name: "🌿 Wheat",
    season: "Rabi",
    soil: "Well-drained Loamy Soil",
    fertilizer: "Nitrogen Rich",
    water: "Medium",
    yield: "4-5 Tons/Hectare",
  },
  {
    name: "🥜 Groundnut",
    season: "Kharif",
    soil: "Sandy Loam",
    fertilizer: "Gypsum + Phosphorus",
    water: "Low",
    yield: "2-3 Tons/Hectare",
  },
];

export default function DetailListViewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="rounded-3xl border border-green-300/30 bg-gradient-to-r from-green-900/80 via-emerald-800/80 to-green-700/80 p-8 shadow-2xl backdrop-blur-xl">

          <h1 className="text-4xl font-bold text-yellow-300">
            🌾 Crop Information
          </h1>

          <p className="mt-4 text-lg text-green-100">
            Explore detailed agricultural information for different crops,
            including soil type, growing season, fertilizer recommendations,
            irrigation needs, and expected yield.
          </p>

        </div>

        {/* Crop Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {crops.map((crop) => (
            <div
              key={crop.name}
              className="rounded-2xl border border-green-300/30 bg-white/10 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-yellow-300">
                {crop.name}
              </h2>

              <div className="mt-6 space-y-3 text-green-100">

                <p><strong>🌱 Season:</strong> {crop.season}</p>

                <p><strong>🌍 Soil Type:</strong> {crop.soil}</p>

                <p><strong>💧 Water Requirement:</strong> {crop.water}</p>

                <p><strong>🌿 Fertilizer:</strong> {crop.fertilizer}</p>

                <p><strong>📈 Expected Yield:</strong> {crop.yield}</p>

              </div>

              <button className="mt-6 rounded-lg bg-yellow-400 px-6 py-2 font-semibold text-green-900 hover:bg-yellow-300">
                View Details
              </button>

            </div>
          ))}

        </div>

      </main>

      <Footer />
    </div>
  );
}