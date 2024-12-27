"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import the Link component

const Hero = () => {
  return (
    <motion.section
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ marginTop: "0px" }} // Ensures it directly touches the navbar
    >
      {/* Background Image */}
      <Image
        src="/assets/images/luxury-hotel.jpg" // Replace with your image path
        alt="Luxury Hotel"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        className="relative flex flex-col justify-center items-center text-center text-white px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to LuxuryHotel
        </h1>
        <p className="text-lg md:text-xl mb-6 font-light">
          Experience unparalleled luxury and comfort.
        </p>
        <Link href="/book">
          <a className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200">
            Book Now
          </a>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
