import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-green-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">

        {/* About */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-yellow-300">
            🌱 AgroAI
          </h2>

          <p className="text-sm leading-7 text-gray-300">
            Empowering farmers with Artificial Intelligence through
            crop advisory, weather insights, pest detection,
            and smart agricultural solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-yellow-300">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-yellow-300">
                About
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="hover:text-yellow-300">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/login" className="hover:text-yellow-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-yellow-300">
            Resources
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>🌾 AI Crop Advisory</li>
            <li>☁️ Weather Insights</li>
            <li>🐛 Pest Detection</li>
            <li>📈 Market Prices</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-yellow-300">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>📧 support@agroai.com</p>
            <p>📞 +91 9321456984 </p>
            <p>📍 Hyderabad, India</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AgroAI. All Rights Reserved.
      </div>
    </footer>
  );
}