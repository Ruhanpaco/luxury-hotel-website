"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#a77b50]">
          <Link href="/">LuxuryHotel</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="text-black text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links (Mobile + Desktop) */}
        <div
          className={`absolute left-0 top-16 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 md:opacity-100 md:max-h-none"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 px-6 md:px-0">
            <li>
              <Link
                href="/"
                className="text-lg text-black hover:text-[#a77b50] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/rooms"
                className="text-lg text-black hover:text-[#a77b50] transition-colors"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg text-black hover:text-[#a77b50] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg text-black hover:text-[#a77b50] transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/restaurant"
                className="text-lg text-black hover:text-[#a77b50] transition-colors"
              >
                Restaurant & Bar
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-lg text-black hover:text-[#a77b50] transition-colors"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Book Button (Desktop Only) */}
        <div className="hidden md:block">
          <Link href="/book">
            <button className="px-6 py-2 text-white bg-[#a77b50] hover:bg-opacity-90 rounded-md transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
