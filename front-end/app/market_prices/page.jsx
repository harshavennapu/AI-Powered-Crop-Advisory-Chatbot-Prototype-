"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const marketPrices = [
  {
    crop: "🌾 Rice",
    price: "₹2,450 / Quintal",
    trend: "📈 Increasing",
  },
  {
    crop: "🌽 Maize",
    price: "₹2,150 / Quintal",
    trend: "📉 Slightly Down",
  },
  {
    crop: "🌿 Wheat",
    price: "₹2,800 / Quintal",
    trend: "📈 Stable",
  },
  {
    crop: "🥜 Groundnut",
    price: "₹6,750 / Quintal",
    trend: "📈 Increasing",
  },
  {
    crop: "🧅 Onion",
    price: "₹1,900 / Quintal",
    trend: "📉 Decreasing",
  },
  {
    crop: "🍅 Tomato",
    price: "₹2,300 / Quintal",
    trend: "📈 High Demand",
  },
];

export default function MarketPricesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-green-300/30 bg-gradient-to-r from-green-900/80 via-emerald-800/80 to-green-700/80 p-8 shadow-2xl backdrop-blur-xl">

          <h1 className="text-4xl font-bold text-yellow-300">
            📈 Market Prices
          </h1>

          <p className="mt-4 text-lg text-green-100">
            Stay updated with the latest agricultural market prices to make
            informed selling decisions and maximize profits.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {marketPrices.map((item) => (
            <div
              key={item.crop}
              className="rounded-2xl border border-green-300/30 bg-white/10 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-yellow-300">
                {item.crop}
              </h2>

              <p className="mt-4 text-lg text-green-100">
                <strong>Price:</strong> {item.price}
              </p>

              <p className="mt-2 text-lg text-green-100">
                <strong>Trend:</strong> {item.trend}
              </p>

              <button className="mt-6 rounded-lg bg-yellow-400 px-6 py-2 font-semibold text-green-900 hover:bg-yellow-300">
                View Market
              </button>

            </div>
          ))}

        </div>

      </main>

      <Footer />
    </div>
  );
}