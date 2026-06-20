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
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Features
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}