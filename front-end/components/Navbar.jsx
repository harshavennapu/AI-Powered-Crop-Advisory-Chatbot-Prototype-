"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, User, ChevronDown, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/showcase", label: "Showcase" },
];

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    setIsLoggedIn(!!token);

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:scale-105"
        >
          <Image
            src="/logo1.png"
            alt="AgroAI Logo"
            width={45}
            height={45}
            className="rounded-full border-2 border-green-600 shadow-md"
          />
          <span className="text-xl font-extrabold text-green-700 sm:text-2xl">
            AgroAI
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
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
            <li className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white font-bold transition hover:bg-green-700"
              >
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-gray-700">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {user?.name || "User"}
                      </h3>

                      <p className="max-w-48 truncate text-sm text-gray-500 dark:text-gray-400">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <User size={18} />
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 dark:hover:bg-gray-700"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-green-600"
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle />

            {!isLoggedIn ? (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-green-600 px-4 py-2 text-center text-white"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-4 py-2 text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
