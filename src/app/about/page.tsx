"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#a77b50] to-[#c89e74] text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About LuxuryHotel</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At LuxuryHotel, we pride ourselves on delivering exceptional hospitality and an unforgettable experience, blending comfort with elegance.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section
        className="py-16 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50] mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Established in the heart of Paradise City, LuxuryHotel has been a beacon of comfort, luxury, and world-class service for over a decade. From our carefully designed rooms to our thoughtfully curated dining experiences, every detail is tailored to create a memorable stay for our guests.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're here for business, leisure, or a special occasion, we go above and beyond to exceed your expectations and make you feel at home.
          </p>
        </div>
      </motion.section>

      {/* Pet-Friendly Policy Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50] mb-6">Pet-Friendly Policy</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            At LuxuryHotel, we believe pets are family too. That’s why we offer a pet-friendly experience to ensure your furry companions feel as comfortable as you do during your stay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pet Welcome Kit",
                description: "Includes treats, a comfy bed, and essentials for your pet's stay.",
              },
              {
                title: "Designated Pet Areas",
                description: "Explore our outdoor spaces designed specifically for your pets.",
              },
              {
                title: "Pet-Sitting Services",
                description: "Need to step out? Our team will care for your pets like their own.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#a77b50] mb-2">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="py-16 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50] mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for perfection in every service we provide, ensuring every guest feels special.",
              },
              {
                title: "Elegance",
                description: "Our design, ambiance, and service radiate sophistication and class.",
              },
              {
                title: "Sustainability",
                description: "We care about our planet and take pride in using eco-friendly practices and materials.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md p-6 rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#a77b50] mb-2">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Closing Statement */}
      <section className="py-16 bg-[#a77b50] text-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We Look Forward to Welcoming You</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            At LuxuryHotel, every stay is more than just a visit. It’s an experience of elegance, comfort, and exceptional service.
          </p>
        </div>
      </section>
    </div>
  );
}
