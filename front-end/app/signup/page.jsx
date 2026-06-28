"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      alert("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-12">

        <div className="w-full max-w-md rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

          <div className="flex flex-col items-center">

            <Image
              src="/logo1.png"
              alt="AgroAI Logo"
              width={90}
              height={90}
            />

            <h1 className="mt-4 text-3xl font-bold text-yellow-300">
              Create Account
            </h1>

            <p className="mt-2 text-center text-green-100">
              Join AgroAI and experience smart farming.
            </p>

          </div>

          <div className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-black/30 p-3 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-black/30 p-3 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg bg-black/30 p-3 text-white outline-none"
            />

            <button
              onClick={handleSignup}
              disabled={loading}
              className="w-full rounded-lg bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

          </div>

          <p className="mt-6 text-center text-green-100">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-yellow-300 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </main>

      <Footer />
    </div>
  );
}