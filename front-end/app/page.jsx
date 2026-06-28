import Link from "next/link";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const cards = [
  {
    title: "🌱 AI Crop Advisory",
    description:
      "Receive personalized crop recommendations based on soil, season, and regional data.",
    link: "/ai_features",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "☁️ Weather Insights",
    description:
      "Stay ahead with real-time weather forecasts and alerts tailored to your farm.",
    link: "/detail_listview",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "🐛 Pest Detection",
    description:
      "Identify pests early with AI-powered image analysis and treatment suggestions.",
    link: "/dashboard",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "📈 Market Prices",
    description:
      "Track live market prices and trends to make informed selling decisions.",
    link: "/about",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-4xl font-extrabold text-yellow-300 drop-shadow-lg">
            🌾 Our Features
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cards.map((card) => (
              <Link key={card.title} href={card.link}>
                <div
                  className={`cursor-pointer rounded-2xl bg-linear-to-r ${card.color} p-1 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  <div className="h-full rounded-2xl bg-white p-6">
                    <Card
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}