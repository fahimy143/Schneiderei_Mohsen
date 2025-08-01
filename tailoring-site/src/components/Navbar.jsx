import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Mohsen Tailoring Logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-semibold text-white">
            <a href="#home" className="hover:text-gray-400 transition">
              Willkommen
            </a>
            <a href="#services" className="hover:text-gray-400 transition">
              Leistungen
            </a>
            <a href="#services" className="hover:text-gray-400 transition">
              Preise
            </a>
            <a href="#about" className="hover:text-gray-400 transition">
              Über mich
            </a>
            <a href="#contact" className="hover:text-gray-400 transition">
              Kontakt
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md px-4 pt-2 pb-4 space-y-1 font-semibold text-white">
          <a
            href="#home"
            className="block px-2 py-1 hover:text-gray-400 rounded"
          >
            Home
          </a>
          <a
            href="#services"
            className="block px-2 py-1 hover:text-gray-400 rounded"
          >
            Services
          </a>
          <a
            href="#prices"
            className="block px-2 py-1 hover:text-gray-400 rounded"
          >
            Prices
          </a>
          <a
            href="#about"
            className="block px-2 py-1 hover:text-gray-400 rounded"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-2 py-1 hover:text-gray-400 rounded"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
