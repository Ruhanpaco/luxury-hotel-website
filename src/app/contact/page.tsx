"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[#a77b50] text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Get in touch with us for any inquiries or assistance. We’re here to help you plan your perfect stay.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Phone */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FiPhone className="text-4xl text-[#a77b50] mx-auto md:mx-0" />
            <h3 className="text-xl font-bold mt-4 text-[#a77b50]">Phone</h3>
            <p className="text-gray-600 mt-2">+1 (234) 567-890</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FiMail className="text-4xl text-[#a77b50] mx-auto md:mx-0" />
            <h3 className="text-xl font-bold mt-4 text-[#a77b50]">Email</h3>
            <p className="text-gray-600 mt-2">info@luxuryhotel.com</p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FiMapPin className="text-4xl text-[#a77b50] mx-auto md:mx-0" />
            <h3 className="text-xl font-bold mt-4 text-[#a77b50]">Location</h3>
            <p className="text-gray-600 mt-2">
              123 Luxury Lane, Paradise City
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50] text-center">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600 text-center mt-4">
            Have a question or need more information? Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
          <form className="mt-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a77b50]"
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a77b50]"
              />
            </div>
            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a77b50]"
            />
            {/* Message */}
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a77b50] h-32"
            />
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#a77b50] text-white rounded-md hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Optional Map Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50] text-center">
            Find Us on the Map
          </h2>
          <p className="text-lg text-gray-600 text-center mt-4">
            Locate us on the map and discover how to reach LuxuryHotel easily with google map.
          </p>
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509315!2d-122.41941548468164!3d37.77492977975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c77f5afeb%3A0xf3428b77a193560!2sLuxuryHotel!5e0!3m2!1sen!2sus!4v1692766639567!5m2!1sen!2sus"
              width="100%"
              height="400"
              allowFullScreen={true}
              loading="lazy"
              className="border rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
