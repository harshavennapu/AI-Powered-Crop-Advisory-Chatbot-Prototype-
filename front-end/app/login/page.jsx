"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save JWT Token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Login Successful!");

      // Redirect to Dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-12">

        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo1.png"
              alt="AgroAI Logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-green-600"
            />
          </div>

          {/* Heading */}
          <h1 className="text-center text-3xl font-bold text-green-700">
            Welcome Back
          </h1>

          <p className="mt-2 mb-8 text-center text-gray-500">
            Login to continue to AgroAI
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-green-600"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-green-600"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          {/* Signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-green-700 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}