"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modal from "@/components/ui/Modal";

const API = "http://localhost:5000/api/crops";
const getCropIcon = (name) => {
  switch (name.toLowerCase()) {
    case "rice":
      return "🌾";

    case "wheat":
      return "🌿";

    case "maize":
      return "🌽";

    case "sugarcane":
      return "🎋";

    case "cotton":
      return "☁️";

    case "banana":
      return "🍌";

    case "tomato":
      return "🍅";

    case "potato":
      return "🥔";

    case "groundnut":
      return "🥜";

    case "sunflower":
      return "🌻";

    default:
      return "🌱";
  }
};

export default function DetailListViewPage() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [selectedCrop, setSelectedCrop] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    season: "",
    soil: "",
    fertilizer: "",
    water: "",
    yield: "",
  });

  // ===========================
  // Fetch Crops
  // ===========================

  const fetchCrops = async () => {
    try {
      setLoading(true);

      const res = await fetch(API);
      const data = await res.json();

      if (data.success) {
        setCrops(data.crops);
      } else {
        setError("Unable to load crops.");
      }
    } catch (err) {
      setError("Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  // ===========================
  // Input Change
  // ===========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===========================
  // Reset Form
  // ===========================

  const resetForm = () => {
    setEditingId(null);

    setFormData({
      name: "",
      season: "",
      soil: "",
      fertilizer: "",
      water: "",
      yield: "",
    });
  };

  // ===========================
  // Create Crop
  // ===========================

  const createCrop = async () => {
    if (
      !formData.name ||
      !formData.season ||
      !formData.soil ||
      !formData.fertilizer ||
      !formData.water ||
      !formData.yield
    ) {
      setError("All fields are required.");
      setSaving(false);
      return;
    }
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Crop Added Successfully");

        setTimeout(() => {
          setMessage("");
        }, 3000);
        setError("");

        resetForm();
        fetchCrops();
        setSaving(false);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Unable to create crop.");
      setSaving(false);
    }
  };

  // ===========================
  // Edit Crop
  // ===========================

  const editCrop = (crop) => {
    setEditingId(crop._id);

    setFormData({
      name: crop.name,
      season: crop.season,
      soil: crop.soil,
      fertilizer: crop.fertilizer,
      water: crop.water,
      yield: crop.yield,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ===========================
  // Update Crop
  // ===========================

  const updateCrop = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${API}/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Crop Updated Successfully");
        setError("");

        resetForm();
        fetchCrops();
        setSaving(false);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Unable to update crop.");
      setSaving(false);
    }
  };

  // ===========================
  // Delete Crop
  // ===========================

  const deleteCrop = async (id) => {
    setSaving(true);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this crop?",
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Crop Deleted Successfully");
        setError("");

        fetchCrops();
        setSaving(false);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Unable to delete crop.");
      setSaving(false);
    }
  };

  // ===========================
  // View Details
  // ===========================

  const handleViewDetails = (crop) => {
    setSelectedCrop(crop);
    setIsOpen(true);
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero Section */}

        <div className="rounded-3xl border border-green-400/20 bg-linear-to-r from-green-950/90 via-emerald-900/90 to-green-800/90 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-extrabold text-yellow-300">
            🌾 Crop Information Management
          </h1>

          <p className="mt-3 text-lg text-green-100">
            Create, update, view and manage agricultural crop records using the
            AgroAI platform.
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <div className="rounded-xl bg-white/10 p-5 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-yellow-300">
              {crops.length}
            </h2>

            <p className="text-green-100">Total Crops</p>
          </div>
        </div>

        {/* Success */}

        {message && (
          <div className="mt-6 rounded-xl border border-green-500 bg-green-600/20 p-4 text-green-200">
            ✅ {message}
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="mt-6 rounded-xl border border-red-500 bg-red-600/20 p-4 text-red-200">
            ❌ {error}
          </div>
        )}

        {/* Form */}

        <section className="mt-12 overflow-hidden rounded-3xl border border-green-400/20 bg-linear-to-br from-slate-900 via-slate-800 to-green-950 p-8 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
          {/* Header */}

          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-yellow-300">
                {editingId ? "✏️ Update Crop" : "🌱 Add New Crop"}
              </h2>

              <p className="mt-2 text-green-200">
                Maintain your crop database with complete CRUD functionality.
              </p>
            </div>

            <div className="rounded-full bg-green-500/10 px-5 py-3 text-green-300">
              🌾 AgroAI Smart Farming
            </div>
          </div>

          {/* Feature Icons */}

          <div className="mb-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-center">
              <div className="text-4xl">🌱</div>

              <h3 className="mt-3 font-bold text-green-300">Smart Farming</h3>

              <p className="mt-2 text-sm text-gray-300">
                AI powered crop recommendations.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5 text-center">
              <div className="text-4xl">🚜</div>

              <h3 className="mt-3 font-bold text-yellow-300">Crop Records</h3>

              <p className="mt-2 text-sm text-gray-300">
                Store crop information securely.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 text-center">
              <div className="text-4xl">📈</div>

              <h3 className="mt-3 font-bold text-blue-300">Better Yield</h3>

              <p className="mt-2 text-sm text-gray-300">
                Increase productivity through data.
              </p>
            </div>
          </div>

          {/* Inputs */}

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-green-200">
                🌾 Crop Name
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rice"
                className="w-full rounded-xl border border-green-500/20 bg-slate-900 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-200">
                📅 Season
              </label>

              <input
                name="season"
                value={formData.season}
                onChange={handleChange}
                placeholder="Kharif"
                className="w-full rounded-xl border border-green-500/20 bg-slate-900 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-200">
                🌍 Soil Type
              </label>

              <input
                name="soil"
                value={formData.soil}
                onChange={handleChange}
                placeholder="Loamy Soil"
                className="w-full rounded-xl border border-green-500/20 bg-slate-900 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-200">
                🌿 Fertilizer
              </label>

              <input
                name="fertilizer"
                value={formData.fertilizer}
                onChange={handleChange}
                placeholder="NPK"
                className="w-full rounded-xl border border-green-500/20 bg-slate-900 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-200">
                💧 Water Requirement
              </label>

              <input
                name="water"
                value={formData.water}
                onChange={handleChange}
                placeholder="Medium"
                className="w-full rounded-xl border border-green-500/20 bg-slate-900 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-200">
                📈 Expected Yield
              </label>

              <input
                name="yield"
                value={formData.yield}
                onChange={handleChange}
                placeholder="5 Tons/Hectare"
                className="w-full rounded-xl border border-green-500/20 bg-slate-900 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/40"
              />
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={editingId ? updateCrop : createCrop}
              disabled={saving}
              className="rounded-xl bg-linear-to-r from-green-500 to-emerald-600 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : editingId ? "Update Crop" : "Add Crop"}
            </button>

            {editingId && (
              <button
                onClick={resetForm}
                className="rounded-xl border border-gray-500 bg-slate-800 px-8 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                Cancel
              </button>
            )}
          </div>
        </section>

        {/* Loading */}

        {loading && (
          <div className="mt-10 text-center text-xl text-white">
            Loading crops...
          </div>
        )}
        {/* Empty State */}

        {!loading && crops.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-green-400/30 bg-white/5 p-16 text-center backdrop-blur-md">
            <div className="text-7xl">🌾</div>

            <h2 className="mt-6 text-3xl font-bold text-yellow-300">
              No Crops Found
            </h2>

            <p className="mt-3 text-green-200">
              Start by adding your first crop using the form above.
            </p>
          </div>
        )}

        {/* Crop Cards */}

        {!loading && crops.length > 0 && (
          <section className="mt-14">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-yellow-300">
                🌱 Crop Database
              </h2>

              <span className="rounded-full bg-green-600 px-4 py-2 text-white">
                {crops.length} Crops
              </span>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {crops.map((crop) => (
                <div
                  key={crop._id}
                  className="group overflow-hidden rounded-3xl border border-green-400/20 bg-linear-to-br from-slate-900/90 via-slate-800/90 to-green-950/90 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-green-400 hover:shadow-green-500/20"
                >
                  {/* Card Header */}

                  <div className="bg-linear-to-r from-green-700 to-emerald-600 p-6 flex flex-col items-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-6xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {getCropIcon(crop.name)}
                    </div>

                    <h2 className="mt-5 text-center text-3xl font-extrabold text-white">
                      {crop.name}
                    </h2>

                    <p className="mt-2 text-sm text-green-100 opacity-90">
                      AI Powered Crop Information
                    </p>
                  </div>

                  {/* Card Body */}

                  <div className="space-y-4 p-6 text-gray-200">
                    <div className="flex justify-between border-b border-green-500/20 pb-2">
                      <span>📅 Season</span>
                      <strong>{crop.season}</strong>
                    </div>

                    <div className="flex justify-between border-b border-green-500/20 pb-2">
                      <span>🌍 Soil</span>
                      <strong>{crop.soil}</strong>
                    </div>

                    <div className="flex justify-between border-b border-green-500/20 pb-2">
                      <span>🌿 Fertilizer</span>
                      <strong>{crop.fertilizer}</strong>
                    </div>

                    <div className="flex justify-between border-b border-green-500/20 pb-2">
                      <span>💧 Water</span>
                      <strong>{crop.water}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>📈 Yield</span>
                      <strong>{crop.yield}</strong>
                    </div>
                  </div>

                  {/* Buttons */}

                  <div className="flex flex-wrap gap-3 border-t border-green-400/20 p-5">
                    <button
                      onClick={() => handleViewDetails(crop)}
                      className="flex-1 rounded-xl bg-yellow-500 px-4 py-3 font-semibold text-black transition hover:bg-yellow-400"
                    >
                      👁 View
                    </button>

                    <button
                      onClick={() => editCrop(crop)}
                      className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => deleteCrop(crop._id)}
                      className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* Modal */}

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedCrop && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-r from-green-500 to-emerald-600 text-5xl shadow-lg">
                  {getCropIcon(selectedCrop.name)}
                </div>

                <h2 className="text-4xl font-bold text-green-700">
                  {selectedCrop.name}
                </h2>

                <p className="mt-2 text-gray-500">AgroAI Crop Information</p>
              </div>

              <div className="grid gap-4">
                <div className="flex justify-between rounded-xl bg-green-50 p-4">
                  <span className="font-semibold">📅 Season</span>
                  <span>{selectedCrop.season}</span>
                </div>

                <div className="flex justify-between rounded-xl bg-green-50 p-4">
                  <span className="font-semibold">🌍 Soil Type</span>
                  <span>{selectedCrop.soil}</span>
                </div>

                <div className="flex justify-between rounded-xl bg-green-50 p-4">
                  <span className="font-semibold">🌿 Fertilizer</span>
                  <span>{selectedCrop.fertilizer}</span>
                </div>

                <div className="flex justify-between rounded-xl bg-green-50 p-4">
                  <span className="font-semibold">💧 Water</span>
                  <span>{selectedCrop.water}</span>
                </div>

                <div className="flex justify-between rounded-xl bg-green-50 p-4">
                  <span className="font-semibold">📈 Expected Yield</span>
                  <span>{selectedCrop.yield}</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-linear-to-r from-green-600 to-emerald-600 px-10 py-3 font-semibold text-white transition hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      </main>

      <Footer />
    </div>
  );
}
