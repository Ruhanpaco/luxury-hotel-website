"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ReservationForm from "./components/ReservationForm";
import { FaSwimmingPool, FaSpa, FaDumbbell, FaCouch } from "react-icons/fa";


// FeatureCard Props Type
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
    <div className="w-full bg-white text-black font-inter">
      {/* Hero Section */}
      <div className="relative">
        <Hero />
        {/* Reservation Form */}
        <div className="absolute inset-x-0 mx-auto -bottom-12 z-10 w-full max-w-5xl">
          <ReservationForm />
        </div>
      </div>

      {/* Why Stay With Us */}
      <section className="py-20 bg-white">
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
      </section>

      {/* Activities & Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-playfair text-black text-center mb-12">
            Activities & Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Schedule */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black">
                Daily Schedule
              </h3>
              <ul className="space-y-4">
                {[
                  { time: "09:00 AM", activity: "Check-in" },
                  { time: "10:00 AM", activity: "Breakfast" },
                  { time: "11:00 AM", activity: "Morning Yoga" },
                  { time: "01:00 PM", activity: "Swimming Pool Open" },
                  { time: "03:00 PM", activity: "Kids Activities" },
                  { time: "06:00 PM", activity: "Dinner" },
                  { time: "09:00 PM", activity: "Live Music" },
                  { time: "10:00 PM", activity: "Cocktail Hour" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center hover:bg-gray-100 transition-colors rounded-lg px-4 py-2"
                  >
                    <span className="text-lg font-semibold text-black">
                      {item.time}
                    </span>
                    <span className="text-lg text-gray-600">
                      {item.activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/assets/images/activities.jpg"
                alt="Hotel Activities"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
