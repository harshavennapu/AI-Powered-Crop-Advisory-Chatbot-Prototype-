"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modal from "@/components/ui/Modal";

const pests = [
  {
    id: 1,
    name: "Stem Borer",
    symptoms: "Dead hearts, white ears, damaged stems.",
    treatment: "Apply Chlorantraniliprole or use pheromone traps.",
  },
  {
    id: 2,
    name: "Aphids",
    symptoms: "Curled leaves, sticky honeydew on plants.",
    treatment: "Spray Neem Oil or Imidacloprid.",
  },
  {
    id: 3,
    name: "Whitefly",
    symptoms: "Yellowing leaves and reduced plant growth.",
    treatment: "Use Yellow Sticky Traps or Neem Oil.",
  },
  {
    id: 4,
    name: "Armyworm",
    symptoms: "Large holes in leaves and severe crop damage.",
    treatment: "Use Spinosad or biological pesticides.",
  },
];

export default function PestDetectionPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPest, setSelectedPest] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLearnMore = (pest) => {
    setSelectedPest(pest);
    setIsOpen(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="rounded-3xl border border-green-300/30 bg-linear-to-r from-orange-900/80 via-red-800/80 to-orange-700/80 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-yellow-300">
            🐛 Pest Detection
          </h1>

          <p className="mt-4 text-lg text-orange-100">
            Detect crop diseases and pests using AI-powered analysis to protect
            your crops and improve productivity.
          </p>
        </div>

        {/* Pest Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {pests.map((pest) => (
            <div
              key={pest.id}
              className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md"
            >
              <h2 className="text-2xl font-bold text-yellow-300">
                🐞 {pest.name}
              </h2>

              <p className="mt-4 text-green-100">
                <strong>Symptoms:</strong> {pest.symptoms}
              </p>

              <button
                onClick={() => handleLearnMore(pest)}
                className="mt-6 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-green-900 hover:bg-yellow-300"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* AI Recommendation */}
        <div className="mt-10 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md">
          <h2 className="text-2xl font-bold text-yellow-300">
            💡 AI Recommendation
          </h2>

          <p className="mt-4 text-green-100">
            Upload crop images to identify pests and receive AI-powered
            treatment recommendations.
          </p>

          <input
            id="pestImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

          <button
            onClick={() => document.getElementById("pestImage").click()}
            className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Upload Image
          </button>

          {selectedImage && (
            <div className="mt-8">
              <h3 className="mb-3 text-xl font-bold text-yellow-300">
                Uploaded Image
              </h3>

              <img
                src={selectedImage}
                alt="Uploaded Crop"
                className="max-h-96 w-full rounded-xl border border-green-500 object-cover"
              />
            </div>
          )}
        </div>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedPest && (
            <>
              <h2 className="mb-4 text-3xl font-bold text-green-700">
                🐞 {selectedPest.name}
              </h2>

              <p className="mb-3">
                <strong>Symptoms:</strong>
                <br />
                {selectedPest.symptoms}
              </p>

              <p className="mb-6">
                <strong>Treatment:</strong>
                <br />
                {selectedPest.treatment}
              </p>

              <div className="text-right">
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
