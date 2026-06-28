import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="rounded-3xl border border-green-300/30 bg-linear-to-r from-green-900/80 via-emerald-800/80 to-green-700/80 p-8 shadow-2xl backdrop-blur-xl">

          <h1 className="text-4xl font-bold text-yellow-300">
            🌱 About AgroAI
          </h1>

          <p className="mt-4 text-lg text-green-100">
            AgroAI is an intelligent agriculture platform designed to help
            farmers make smarter decisions using Artificial Intelligence.
            Our goal is to improve productivity, reduce crop losses, and
            provide modern farming solutions through technology.
          </p>

        </div>

        {/* Mission & Vision */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-yellow-300">
              🎯 Our Mission
            </h2>

            <p className="mt-4 text-green-100">
              To empower farmers with AI-driven tools that simplify crop
              management, improve decision-making, and promote sustainable
              agriculture.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-yellow-300">
              👁️ Our Vision
            </h2>

            <p className="mt-4 text-green-100">
              To create a future where every farmer can access smart farming
              technologies for increased productivity and better livelihoods.
            </p>
          </div>

        </div>

        {/* Services */}
        <div className="mt-10 rounded-3xl bg-white/10 p-8 shadow-xl backdrop-blur-md">

          <h2 className="text-3xl font-bold text-yellow-300">
            🚀 What We Offer
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-green-900/40 p-5">
              <h3 className="text-xl font-semibold text-white">
                🌾 AI Crop Advisory
              </h3>
              <p className="mt-2 text-green-100">
                Personalized crop recommendations based on soil and weather.
              </p>
            </div>

            <div className="rounded-xl bg-blue-900/40 p-5">
              <h3 className="text-xl font-semibold text-white">
                ☁️ Weather Insights
              </h3>
              <p className="mt-2 text-green-100">
                Real-time forecasts to help farmers plan agricultural activities.
              </p>
            </div>

            <div className="rounded-xl bg-orange-900/40 p-5">
              <h3 className="text-xl font-semibold text-white">
                🐛 Pest Detection
              </h3>
              <p className="mt-2 text-green-100">
                AI-powered pest identification and treatment suggestions.
              </p>
            </div>

            <div className="rounded-xl bg-purple-900/40 p-5">
              <h3 className="text-xl font-semibold text-white">
                📈 Market Prices
              </h3>
              <p className="mt-2 text-green-100">
                Stay updated with the latest agricultural market trends and crop prices.
              </p>
            </div>

          </div>

        </div>

        {/* Team */}
        <div className="mt-10 rounded-3xl border border-yellow-300/20 bg-linear-to-r from-green-900/80 to-emerald-700/80 p-8 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-yellow-300">
            🤝 Our Commitment
          </h2>

          <p className="mt-4 text-lg text-green-100">
            We are committed to supporting farmers through innovative,
            reliable, and user-friendly AI solutions that contribute to
            sustainable agriculture and food security.
          </p>

        </div>

      </main>

      <Footer />
    </div>
  );
}