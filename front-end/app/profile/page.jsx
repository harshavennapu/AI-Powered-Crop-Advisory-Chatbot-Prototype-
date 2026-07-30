"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
        "https://ai-powered-crop-advisory-chatbot.onrender.com/api/users/profile",
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
        "https://ai-powered-crop-advisory-chatbot.onrender.com/api/users/profile",
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
        <div className="rounded-3xl bg-linear-to-r from-green-900 via-emerald-800 to-green-700 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-yellow-300">👤 My Profile</h1>

          <p className="mt-3 text-lg text-green-100">
            View and manage your AgroAI account information.
          </p>
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
          <div className="mt-10 rounded-3xl border border-green-300/30 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-r from-green-600 to-emerald-500 text-5xl font-bold text-white shadow-xl">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <h2 className="mt-5 text-4xl font-bold text-yellow-300">
                {user.name}
              </h2>

              <p className="mt-2 text-lg text-green-100">{user.email}</p>
            </div>

            {/* Profile Details */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div className="rounded-2xl bg-green-900/40 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-yellow-300">
                  👤 Full Name
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
                  <p className="mt-3 text-lg text-green-100">{user.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="rounded-2xl bg-green-900/40 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-yellow-300">
                  📧 Email Address
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
                  <p className="mt-3 text-lg text-green-100">{user.email}</p>
                )}
              </div>

              {/* Created */}
              <div className="rounded-2xl bg-green-900/40 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-yellow-300">
                  📅 Account Created
                </h3>

                <p className="mt-3 text-lg text-green-100">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* User ID */}
              <div className="rounded-2xl bg-green-900/40 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-yellow-300">
                  🆔 User ID
                </h3>

                <p className="mt-3 break-all text-sm text-green-100">
                  {user._id}
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-linear-to-r from-green-600 to-emerald-500 p-6 text-center text-white shadow-xl">
                <h2 className="text-4xl font-bold">1</h2>
                <p className="mt-2">Registered Account</p>
              </div>

              <div className="rounded-2xl bg-linear-to-r from-yellow-500 to-orange-500 p-6 text-center text-white shadow-xl">
                <h2 className="text-4xl font-bold">24/7</h2>
                <p className="mt-2">AI Assistance</p>
              </div>

              <div className="rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 p-6 text-center text-white shadow-xl">
                <h2 className="text-4xl font-bold">100%</h2>
                <p className="mt-2">Secure Account</p>
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
                  className="rounded-xl bg-yellow-400 px-8 py-3 font-bold text-green-900 transition hover:scale-105 hover:bg-yellow-300"
                >
                  ✏️ Edit Profile
                </button>
              )}

              <button
                onClick={fetchProfile}
                className="rounded-xl bg-green-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-green-700"
              >
                🔄 Refresh
              </button>

              <button
                onClick={() => router.push("/dashboard")}
                className="rounded-xl bg-gray-800 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-gray-900"
              >
                🏠 Dashboard
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
