"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ReservationForm from "./components/ReservationForm";
import { FaSwimmingPool, FaSpa, FaDumbbell, FaCouch } from "react-icons/fa";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md p-6 text-center transition-transform"
    >
      <div className="flex items-center justify-center text-4xl text-[#a77b50] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-white text-black font-inter relative">
      {/* Hero Section */}
      <div className="relative">
        <Hero />

        {/* Reservation Form */}
        <div className="absolute inset-x-0 mx-auto -bottom-16 z-10 w-full max-w-5xl reservation-form-wrapper">
          <ReservationForm />
        </div>
      </div>

      {/* Why Stay With Us */}
      <motion.section
        id="why-us"
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-playfair text-black mb-12">
            Why Stay With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<FaSwimmingPool />}
              title="Infinity Pool"
              description="Dive into luxury with our temperature-controlled infinity pool."
            />
            <FeatureCard
              icon={<FaSpa />}
              title="Luxury Spa"
              description="Indulge in personalized spa treatments in a serene environment."
            />
            <FeatureCard
              icon={<FaDumbbell />}
              title="Fitness Center"
              description="Stay active with state-of-the-art gym equipment and personal trainers."
            />
            <FeatureCard
              icon={<FaCouch />}
              title="Exclusive Lounges"
              description="Relax in our premium lounges with breathtaking views and refreshments."
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
