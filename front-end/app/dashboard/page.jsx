"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    title: "🌱 AI Crop Advisory",
    description: "Get AI-powered crop recommendations based on soil and weather conditions.",
    color: "from-green-500 to-emerald-600",
    link: "/ai_features",
  },
  {
    title: "☁️ Weather Insights",
    description: "View weather forecasts and alerts to plan farming activities.",
    color: "from-blue-500 to-cyan-600",
    link: "/detail_listview",
  },
  {
    title: "🐛 Pest Detection",
    description: "Detect crop diseases and pests using AI image analysis.",
    color: "from-orange-500 to-red-500",
    link: "/pest_detection",
  },
  {
    title: "📈 Market Prices",
    description: "Check the latest crop market prices and trends.",
    color: "from-purple-500 to-indigo-600",
    link: "/market_prices",
  },
];

export default function DashboardPage() {
   const [user, setUser] = useState("Guest");

useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser.name || "User");
  }
}, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">

        {/* Welcome */}
        <div className="rounded-3xl border border-green-300/30 bg-gradient-to-r from-green-900/80 via-emerald-800/80 to-green-700/80 p-8 shadow-2xl backdrop-blur-xl">

          <h1 className="text-4xl font-bold text-yellow-300">
            👋 Welcome {user}
          </h1>

          <p className="mt-4 text-lg text-green-100">
            Manage farming activities using AI-powered tools.
          </p>

        </div>

        {/* Stats */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md">
            <h2 className="text-4xl font-bold text-yellow-300">4</h2>
            <p className="text-white mt-2">AI Services</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md">
            <h2 className="text-4xl font-bold text-yellow-300">24/7</h2>
            <p className="text-white mt-2">Monitoring</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md">
            <h2 className="text-4xl font-bold text-yellow-300">100%</h2>
            <p className="text-white mt-2">AI Support</p>
          </div>

        </div>

        {/* Features */}
        <section className="mt-12">
          <h2 className="text-4xl font-bold text-yellow-300 text-center mb-8">
            🌾 Dashboard Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-2xl bg-gradient-to-r ${feature.color} p-1 shadow-xl hover:-translate-y-2 transition`}
              >
                <div className="bg-white p-6 rounded-2xl">

                  <h3 className="text-2xl font-bold text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-gray-600">
                    {feature.description}
                  </p>

                  <Link href={feature.link}>
                    <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                      Explore
                    </button>
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}