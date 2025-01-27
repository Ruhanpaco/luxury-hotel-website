"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#a77b50] text-white">
      <div className="container mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">LuxuryHotel</h3>
            <p className="text-sm">
              Experience unparalleled luxury and comfort at our world-class hotel.
              Your comfort is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-black transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-sm text-white hover:text-black transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white hover:text-black transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="font-semibold">Phone: </span>+1 (234) 567-890
              </li>
              <li className="text-sm">
                <span className="font-semibold">Email: </span>info@luxuryhotel.com
              </li>
              <li className="text-sm">
                <span className="font-semibold">Location: </span>
                123 Luxury Lane, Paradise City
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white opacity-50"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-black transition-colors text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-black transition-colors text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-black transition-colors text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-white hover:text-black transition-colors text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">LuxuryHotel</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
