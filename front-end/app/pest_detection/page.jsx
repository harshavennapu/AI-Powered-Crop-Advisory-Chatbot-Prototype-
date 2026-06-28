"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PestDetectionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-green-300/30 bg-linear-to-r from-orange-900/80 via-red-800/80 to-orange-700/80 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-yellow-300">
            🐛 Pest Detection
          </h1>

          <p className="mt-4 text-lg text-orange-100">
            Detect crop diseases and pests using AI-powered analysis to protect
            your crops and improve productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-yellow-300">
              🐞 Common Pests
            </h2>

            <ul className="mt-4 space-y-2 text-green-100">
              <li>• Stem Borer</li>
              <li>• Aphids</li>
              <li>• Whitefly</li>
              <li>• Armyworm</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-yellow-300">
              💡 AI Recommendation
            </h2>

            <p className="mt-4 text-green-100">
              Upload crop images to identify pests and receive treatment
              recommendations powered by AI.
            </p>

            <button className="mt-6 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-green-900 hover:bg-yellow-300">
              Upload Image
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}