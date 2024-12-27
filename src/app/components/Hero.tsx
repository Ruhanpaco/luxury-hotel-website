"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#a77b50] text-white">
      <div className="container mx-auto py-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">LuxuryHotel</h3>
            <p className="text-sm">
              Experience unparalleled luxury and comfort at our world-class hotel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm hover:underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/rooms">
                  <a className="text-sm hover:underline">Rooms</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm hover:underline">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm hover:underline">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">Phone: +1 (234) 567-890</li>
              <li className="text-sm">Email: info@luxuryhotel.com</li>
              <li className="text-sm">Location: 123 Luxury Lane, Paradise City</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} LuxuryHotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
