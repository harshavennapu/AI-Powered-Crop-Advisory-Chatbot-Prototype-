import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="rounded-3xl border border-green-300/40 bg-linear-to-r from-green-900/90 via-emerald-800/90 to-green-700/90 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="text-4xl font-bold text-yellow-300">
            🌱 About AgroAI
          </h1>

          <p className="mt-4 text-lg text-green-100">
            AgroAI is an intelligent agriculture platform designed to help
            farmers make smarter decisions using Artificial Intelligence. Our
            goal is to improve productivity, reduce crop losses, and provide
            modern farming solutions through technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/90">
            <h2 className="text-2xl font-bold text-yellow-300">
              🎯 Our Mission
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              To empower farmers with AI-driven tools that simplify crop
              management, improve decision-making, and promote sustainable
              agriculture.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-yellow-300">
              👁️ Our Vision
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              To create a future where every farmer can access smart farming
              technologies for increased productivity and better livelihoods.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-10 rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-2xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/90">
          <h2 className="text-center text-4xl font-bold text-yellow-400">
            🚀 What We Offer
          </h2>

          <div className="mx-auto mb-8 mt-3 h-1 w-24 rounded-full bg-green-500"></div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* AI Crop */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:bg-green-900/30">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                🌾 AI Crop Advisory
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                Personalized crop recommendations based on soil and weather.
              </p>
            </div>

            {/* Weather */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-blue-800 dark:bg-blue-900/30">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                ☁️ Weather Insights
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                Real-time forecasts to help farmers plan agricultural
                activities.
              </p>
            </div>

            {/* Pest */}
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-orange-800 dark:bg-orange-900/30">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                🐛 Pest Detection
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                AI-powered pest identification and treatment suggestions.
              </p>
            </div>

            {/* Market */}
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-purple-800 dark:bg-purple-900/30">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                📈 Market Prices
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                Stay updated with the latest agricultural market trends and crop
                prices.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="rounded-3xl border border-yellow-300/20 bg-linear-to-r from-green-900/90 to-emerald-700/90 p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-yellow-300">
            🤝 Our Commitment
          </h2>

          <p className="mt-4 text-lg text-green-100">
            We are committed to supporting farmers...
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
