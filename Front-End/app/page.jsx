import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const cards = [
  {
    title: "AI Crop Advisory",
    description:
      "Receive personalized crop recommendations based on soil, season, and regional data.",
  },
  {
    title: "Weather Insights",
    description:
      "Stay ahead with real-time weather forecasts and alerts tailored to your farm.",
  },
  {
    title: "Pest Detection",
    description:
      "Identify pests early with AI-powered image analysis and treatment suggestions.",
  },
  {
    title: "Market Prices",
    description:
      "Track live market prices and trends to make informed selling decisions.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-4xl font-extrabold text-yellow-300 drop-shadow-lg md:text-5xl">
            🌱 Our Features
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-2xl p-1 shadow-xl ${
                  index === 0
                    ? "bg-linear-to-r from-green-500 to-emerald-600"
                    : index === 1
                    ? "bg-linear-to-r from-blue-500 to-cyan-600"
                    : index === 2
                    ? "bg-linear-to-r from-orange-500 to-red-500"
                    : "bg-linear-to-r from-purple-500 to-indigo-600"
                }`}
              >
                <div className="rounded-2xl bg-white p-6 h-full">
                  <Card
                    title={card.title}
                    description={card.description}
                  />
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