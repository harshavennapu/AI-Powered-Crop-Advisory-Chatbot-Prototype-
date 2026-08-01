"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Calendar,
  IdCard,
  Pencil,
  RefreshCw,
  LayoutDashboard,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const router = useRouter();

  // ==========================
  // State
  // ==========================

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(false);

  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // ==========================
  // Load Profile
  // ==========================

  useEffect(() => {
    fetchProfile();
  }, []);

  // ==========================
  // Fetch Profile
  // ==========================

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (data.success) {
        setUser(data.user);

        setFormData({
          name: data.user.name,
          email: data.user.email,
        });

        setError("");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Update Profile
  // ==========================

  const updateProfile = async () => {
    const token = localStorage.getItem("token");

    if (!formData.name || !formData.email) {
      setError("All fields are required.");
      return;
    }

    try {
      setSaving(true);

      const res = await fetch(
        "https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com/api/users/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (data.success) {
        setUser(data.user);

        setEditing(false);

        setMessage("✅ Profile updated successfully!");

        setError("");

        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);

      setError("Unable to update profile.");
    } finally {
      setSaving(false);
    }
  };

  // ==========================
  // Loading Screen
  // ==========================

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-2xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-green-700">
            Loading Profile...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        {/* Hero Section */}
        <div className="mb-8 rounded-3xl bg-linear-to-r from-green-900 via-emerald-800 to-green-700 p-8 shadow-2xl">
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <User className="text-white" size={34} />
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl font-bold text-white">
                👋 Welcome back, {user?.name || "User"}!
              </h1>

              <p className="mt-2 text-lg text-green-100">
                Manage your AgroAI account and keep your information up to date.
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {message && (
          <div className="mt-8 rounded-xl border border-green-300 bg-green-100 p-4 text-center font-semibold text-green-700 shadow-lg">
            {message}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-8 rounded-xl border border-red-300 bg-red-100 p-4 text-center font-semibold text-red-700 shadow-lg">
            {error}
          </div>
        )}

        {/* Profile Card */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 rounded-3xl border border-green-300/30 bg-white/10 p-8 shadow-2xl backdrop-blur-md"
          >
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-emerald-700 text-5xl font-bold text-white shadow-xl ring-4 ring-green-100 dark:ring-green-800">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-4 border-white bg-green-500"></span>

                <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-2 border-white bg-green-500"></div>
              </div>
              <h2 className="mt-5 text-4xl font-bold text-green-700 dark:text-green-400">
                {user.name}
              </h2>

              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                {user.email}
              </p>
              <div className="mt-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                🌱 AgroAI Member
              </div>
            </div>

            {/* Profile Details */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div
                className="
rounded-2xl
bg-green-50
dark:bg-gray-800
p-6
shadow-lg
transition-all
duration-300
hover:scale-[1.02]
hover:shadow-2xl
"
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-green-700 dark:text-green-400">
                  <User size={20} />
                  Full Name
                </h3>

                {editing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="mt-3 w-full rounded-xl border border-green-400 bg-green-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                  />
                ) : (
                  <p className="mt-3 text-lg text-gray-800 dark:text-green-100">
                    {user.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="rounded-2xl bg-green-900/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="flex items-center gap-2 text-lg font-bold text-green-700 dark:text-green-400">
                  <Mail size={20} />
                  Email Address
                </h3>

                {editing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="mt-3 w-full rounded-xl border border-green-400 bg-green-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                  />
                ) : (
                  <p className="mt-3 text-lg text-gray-800 dark:text-green-100">
                    {user.email}
                  </p>
                )}
              </div>

              {/* Created */}
              <div className="rounded-2xl bg-green-900/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="flex items-center gap-2 text-lg font-bold text-green-700 dark:text-green-400">
                  <Calendar size={20} />
                  Account Created
                </h3>

                <p className="mt-3 text-lg text-gray-800 dark:text-green-100">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* User ID */}
              <div className="rounded-2xl bg-green-50 dark:bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <h3 className="flex items-center gap-2 text-lg font-bold text-green-700 dark:text-green-400">
                  <User size={20} />
                  Account Status
                </h3>

                <p className="mt-3 break-all text-sm text-gray-800 dark:text-green-100">
                  Active
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-linear-to-r from-green-600 to-emerald-500 p-6 text-center text-white shadow-xl">
                <h2 className="text-4xl font-bold">👤</h2>

                <p className="mt-2 text-lg font-semibold">Account</p>

                <p className="mt-1">Active</p>
              </div>
              <div className="rounded-2xl bg-linear-to-r from-green-600 to-emerald-500 p-6 text-center text-white shadow-xl">
                <h2 className="text-4xl font-bold">🤖</h2>

                <p className="mt-2 text-lg font-semibold">AI Assistant</p>

                <p className="mt-1">Available 24/7</p>
              </div>
              <div className="rounded-2xl bg-linear-to-r from-green-600 to-emerald-500 p-6 text-center text-white shadow-xl">
                <h2 className="text-4xl font-bold">🔒</h2>

                <p className="mt-2 text-lg font-semibold">Security</p>

                <p className="mt-1">Protected</p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              {editing ? (
                <>
                  <button
                    onClick={updateProfile}
                    disabled={saving}
                    className="rounded-xl bg-green-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-green-700 disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "💾 Save Changes"}
                  </button>

                  <button
                    onClick={() => {
                      setEditing(false);
                      setFormData({
                        name: user.name,
                        email: user.email,
                      });
                      setError("");
                    }}
                    className="rounded-xl bg-red-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-700"
                  >
                    ❌ Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditing(true)}
                  className="min-w-45 rounded-xl bg-yellow-400 px-8 py-3 font-bold text-green-900 transition hover:scale-105 hover:bg-yellow-300"
                >
                  ✏️ Edit Profile
                </button>
              )}

              <button
                onClick={fetchProfile}
                className="min-w-45 rounded-xl bg-green-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-green-700"
              >
                🔄 Refresh
              </button>

              <button
                onClick={() => router.push("/dashboard")}
                className="rounded-xl bg-gray-800 px-8 py-3 font-bold text-white"
              >
                🏠 Dashboard
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  router.push("/login");
                }}
                className="min-w-48 rounded-xl bg-red-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-700"
              >
                🚪 Logout
              </button>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
