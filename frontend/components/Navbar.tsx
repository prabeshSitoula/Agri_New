"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ConnectWallet from "./ConnectWallet";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Set active link based on current path
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setActiveLink(path);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define navigation items
  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/products", label: "Products" },
    { path: "/batches", label: "Batches" },
    { path: "/users", label: "Users" },
    { path: "/admin/register", label: "Admin Registration" }, // Changed label to be more specific
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/logo.svg"
                  alt="Supply Chain Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="ml-3">
                <Image
                  src="/name.svg"
                  alt="Supply Chain"
                  width={130}
                  height={32}
                  className="transition-all duration-300 group-hover:opacity-80"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeLink.startsWith(item.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"
                }`}
              >
                {item.label}
                {activeLink.startsWith(item.path) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-500 rounded-t-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ConnectWallet />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Toggle menu</span>
                {!mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown with animation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {/* Mobile Navigation */}
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                activeLink.startsWith(item.path)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100">
          <ConnectWallet className="w-full py-3" />
        </div>
      </div>
    </nav>
  );
}
