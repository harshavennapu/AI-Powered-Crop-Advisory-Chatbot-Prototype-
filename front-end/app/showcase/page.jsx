"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button, Input, Modal, Toast, Loader } from "../../components/ui";

export default function ShowcasePage() {
  const [open, setOpen] = useState(false);
  const [cropName, setCropName] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const handleSearch = () => {
    if (!cropName.trim()) {
      setSearchResult("⚠ Please enter a crop name.");
      return;
    }

    const crop = cropName.trim().toLowerCase();

    switch (crop) {
      case "rice":
        setSearchResult(
          "🌾 Rice grows best in clayey soil during the Kharif season. Recommended fertilizer: NPK.",
        );
        break;

      case "wheat":
        setSearchResult(
          "🌿 Wheat prefers loamy soil during the Rabi season. Moderate irrigation is recommended.",
        );
        break;

      case "maize":
        setSearchResult(
          "🌽 Maize grows well in well-drained loamy soil. Nitrogen-rich fertilizer improves yield.",
        );
        break;

      case "cotton":
        setSearchResult(
          "☁️ Cotton grows best in black soil with warm temperatures.",
        );
        break;

      case "sugarcane":
        setSearchResult(
          "🎋 Sugarcane requires fertile soil, regular irrigation, and a long growing season.",
        );
        break;

      default:
        setSearchResult(`❌ No information available for "${cropName}".`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />

      <main className="mx-auto flex-1 w-full max-w-6xl px-6 py-10">
        <h1 className="mb-8 text-4xl font-bold text-yellow-300">
          UI Components Showcase
        </h1>

        <div className="space-y-6 rounded-3xl border border-green-300/30 bg-white p-8 shadow-2xl dark:bg-gray-800">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>

          <Input
            placeholder="Enter crop name (Rice, Wheat, Maize, Sugarcane...)"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
          />
          <Button onClick={handleSearch}>Search Crop</Button>
          {searchResult && (
            <div className="rounded-xl border border-green-300 bg-green-50 p-5 dark:border-green-400/30 dark:bg-green-900/20">
              <h3 className="mb-2 text-lg font-bold text-yellow-300">
                Search Result
              </h3>
              <p className="leading-7 text-gray-700 dark:text-green-100">
                {searchResult}
              </p>
            </div>
          )}

          <Loader />

          <Toast message="Success Toast" />

          <Modal isOpen={open}>
            <h2 className="mb-4 text-2xl font-bold text-green-700">
              🌾 AgroAI Information
            </h2>

            <p className="mb-6 text-gray-700 leading-7">
              This reusable modal component can display crop details, weather
              alerts, AI recommendations, confirmation messages, and other
              important agricultural information across the AgroAI application.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
            >
              Got it!
            </button>
          </Modal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
