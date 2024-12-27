"use client";

import { motion } from "framer-motion";
import {
  FaSwimmer,
  FaWifi,
  FaBed,
  FaConciergeBell,
  FaUtensils,
  FaSpa,
  FaCar,
  FaCocktail,
  FaBroom,
  FaChild,
  FaBusinessTime,
  FaDumbbell,
  FaTv,
  FaPhone,
  FaFirstAid,
} from "react-icons/fa";

const services = [
  {
    title: "Room Service",
    description:
      "Enjoy 24/7 in-room dining with a wide selection of local and international dishes.",
    icon: <FaConciergeBell />,
  },
  {
    title: "Free WiFi",
    description:
      "Stay connected with complimentary high-speed WiFi throughout the hotel.",
    icon: <FaWifi />,
  },
  {
    title: "Daily Housekeeping",
    description:
      "Our professional team ensures your room is spotless every day for your comfort.",
    icon: <FaBroom />,
  },
  {
    title: "Infinity Pool",
    description:
      "Relax in our temperature-controlled infinity pool with stunning views.",
    icon: <FaSwimmer />,
  },
  {
    title: "Luxury Spa",
    description:
      "Pamper yourself with spa treatments that rejuvenate your body and soul.",
    icon: <FaSpa />,
  },
  {
    title: "Fitness Center",
    description:
      "Stay fit with state-of-the-art gym equipment and personal trainers available.",
    icon: <FaDumbbell />,
  },
  {
    title: "Fine Dining",
    description:
      "Savor gourmet meals crafted by world-class chefs at our on-site restaurant.",
    icon: <FaUtensils />,
  },
  {
    title: "Kids Activities",
    description:
      "Engage your little ones with supervised fun activities designed just for them.",
    icon: <FaChild />,
  },
  {
    title: "Shuttle Service",
    description:
      "Enjoy seamless transportation with our complimentary shuttle service.",
    icon: <FaCar />,
  },
  {
    title: "Signature Cocktails",
    description:
      "Relax with handcrafted cocktails and premium beverages at our stylish bar.",
    icon: <FaCocktail />,
  },
  {
    title: "Business Center",
    description:
      "Host meetings and conferences in our fully-equipped business facilities.",
    icon: <FaBusinessTime />,
  },
  {
    title: "Smart TVs",
    description:
      "Stream your favorite shows and movies with in-room smart TV entertainment.",
    icon: <FaTv />,
  },
  {
    title: "24/7 Front Desk",
    description:
      "Our friendly staff is available round the clock to assist with your needs.",
    icon: <FaPhone />,
  },
  {
    title: "Medical Assistance",
    description:
      "We provide on-call medical assistance to ensure your health and safety.",
    icon: <FaFirstAid />,
  },
];

export default function Services() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/images/services-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50] mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-[#a77b50] text-white text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#a77b50]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
