"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/showcase", label: "Showcase" },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition hover:scale-105">
          <Image
            src="/logo1.png"
            alt="AgroAI Logo"
            width={55}
            height={55}
            className="rounded-full border-2 border-green-600 shadow-md"
          />
          <span className="text-2xl font-extrabold text-green-700">
            AgroAI
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8">

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-semibold text-gray-700 transition hover:text-green-600"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <ThemeToggle />

          {!isLoggedIn ? (
            <li>
              <Link
                href="/login"
                className="rounded-full bg-green-600 px-6 py-2 font-semibold text-white transition hover:bg-green-700"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          )}

        </ul>
      </nav>
    </header>
  );
}