import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          {/* Crop-style logo */}
          <div className="h-10 w-12 overflow-hidden rounded-md border-2 border-green-600 shadow-sm sm:h-11 sm:w-14">
            <Image
              src="/logo1.png"
              alt="Crop Logo"
              width={56}
              height={44}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <span className="text-xl font-bold text-green-700">AgroAI</span>
        </Link>

        <ul className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-green-700 sm:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Customized Login Button with Borders */}
          <li>
            <Link
              href="/login"
              className="rounded-md border-2 border-green-600 px-3 py-1.5 text-sm font-semibold text-green-700 transition-all duration-200 hover:bg-green-600 hover:text-white sm:px-4 sm:py-2 sm:text-base"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}