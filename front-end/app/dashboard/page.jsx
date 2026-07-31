"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    title: "🌱 AI Crop Advisory",
    description:
      "Get AI-powered crop recommendations based on soil and weather conditions.",
    color: "from-green-500 via-green-500 to-emerald-600",
    link: "/ai_features",
  },
  {
    title: "🌦️ Weather Insights",
    description:
      "View weather forecasts and alerts to plan farming activities.",
    color: "from-sky-500 via-sky-500 to-blue-600",
    link: "/detail_listview",
  },
  {
    title: "🐛 Pest Detection",
    description: "Detect crop diseases and pests using AI image analysis.",
    color: "from-orange-500 via-orange-500 to-red-500",
    link: "/pest_detection",
  },
  {
    title: "📈 Market Prices",
    description: "Check the latest crop market prices and trends.",
    color: "from-violet-500 via-violet-500 to-purple-600",
    link: "/market_prices",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState("Guest");
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    users: 0,
    crops: 0,
    aiFeatures: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        // Profile API
        const profileRes = await fetch(
          " =https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const profileData = await profileRes.json();

        if (!profileData.success) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          router.push("/login");
          return;
        }

        setUser(profileData.user.name);

        // Dashboard Stats API
        const statsRes = await fetch(
          " =https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com/api/dashboard/stats",
        );

        const statsData = await statsRes.json();

        if (statsData.success) {
          setStats(statsData.stats);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        router.push("/login");
      }
    };

    loadDashboard();
  }, [router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-3xl font-bold text-green-600">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {/* Welcome */}
        <div className="rounded-3xl border border-green-300/30 bg-linear-to-r from-green-900/80 via-emerald-800/80 to-green-700/80 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-yellow-300">
            👋 Welcome {user}
          </h1>

          <p className="mt-4 text-lg text-green-100">
            Manage farming activities using AI-powered tools.
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md shadow-lg">
            <h2 className="text-4xl font-bold text-yellow-300">
              {stats.users}
            </h2>

            <p className="mt-2 text-white">Registered Users</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md shadow-lg">
            <h2 className="text-4xl font-bold text-yellow-300">
              {stats.crops}
            </h2>

            <p className="mt-2 text-white">Total Crops</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md shadow-lg">
            <h2 className="text-4xl font-bold text-yellow-300">
              {stats.aiFeatures}
            </h2>

            <p className="mt-2 text-white">AI Features</p>
          </div>
        </div>

        {/* Dashboard Features */}
        <section className="mt-12">
          <h2 className="mb-8 text-center text-4xl font-bold text-yellow-300">
            🌾 Dashboard Features
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-3xl bg-linear-to-r ${feature.color} p-1 shadow-xl transition duration-300 hover:-translate-y-2`}
              >
                <div className="h-full rounded-[22px] bg-white p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-gray-600">{feature.description}</p>

                  <Link href={feature.link}>
                    <button className="mt-6 rounded-lg bg-green-600 px-6 py-2 text-white transition hover:bg-green-700">
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
