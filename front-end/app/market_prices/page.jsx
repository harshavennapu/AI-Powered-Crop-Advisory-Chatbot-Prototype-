"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modal from "@/components/ui/Modal";

export default function MarketPricesPage() {
  const [marketPrices, setMarketPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  useEffect(() => {
    const fetchMarketPrices = async () => {
      try {
        const res = await fetch(
          " https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com/api/market",
        );

        if (!res.ok) {
          throw new Error("Failed to fetch market prices");
        }

        const data = await res.json();

        if (data.success) {
          setMarketPrices(data.marketPrices);
        } else {
          setError("No market data available.");
        }
      } catch (err) {
        console.error(err);
        setError("Unable to load market prices.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarketPrices();
  }, []);

  const handleViewMarket = (item) => {
    setSelectedCrop(item);
    setIsOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="rounded-3xl border border-green-300/30 bg-linear-to-r from-green-900/80 via-emerald-800/80 to-green-700/80 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-yellow-300">
            📈 Market Prices
          </h1>

          <p className="mt-4 text-lg text-green-100">
            Stay updated with the latest agricultural market prices.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-10 text-center text-2xl text-white">
            Loading market prices...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-10 text-center text-xl text-red-400">{error}</div>
        )}

        {/* Empty */}
        {!loading && !error && marketPrices.length === 0 && (
          <div className="mt-10 text-center text-xl text-white">
            No market prices available.
          </div>
        )}

        {/* Cards */}
        {!loading && !error && marketPrices.length > 0 && (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {marketPrices.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-green-300/30 bg-white/10 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <h2 className="text-3xl font-bold text-yellow-300">
                  📈 {item.crop}
                </h2>

                <p className="mt-4 text-lg text-green-100">
                  <strong>Price:</strong> {item.price}
                </p>

                <p className="mt-2 text-lg text-green-100">
                  <strong>Trend:</strong> {item.trend}
                </p>

                <button
                  onClick={() => handleViewMarket(item)}
                  className="mt-6 rounded-lg bg-yellow-400 px-6 py-2 font-semibold text-green-900 transition hover:bg-yellow-300"
                >
                  View Market
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedCrop && (
            <>
              <h2 className="mb-4 text-3xl font-bold text-green-700">
                📈 {selectedCrop.crop}
              </h2>

              <div className="space-y-3 text-lg">
                <p>
                  <strong>Price:</strong> {selectedCrop.price}
                </p>

                <p>
                  <strong>Trend:</strong> {selectedCrop.trend}
                </p>
              </div>

              <div className="mt-8 text-right">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700"
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
