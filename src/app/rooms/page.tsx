"use client";

import { motion } from "framer-motion";
import Booking from "../components/ReservationForm"; // Path to your booking component

const rooms = [
  {
    name: "Deluxe Room",
    price: "$200/night",
    description: "A luxurious room with modern amenities and a stunning city view.",
    sleeps: "2 Adults, 1 Child",
    image: "/assets/images/room-1.jpg",
  },
  {
    name: "Suite",
    price: "$350/night",
    description: "Experience unparalleled comfort with a spacious suite and premium furnishings.",
    sleeps: "4 Adults",
    image: "/assets/images/room-2.jpg",
  },
  {
    name: "Family Room",
    price: "$280/night",
    description: "Perfect for families, featuring multiple beds and a cozy atmosphere.",
    sleeps: "2 Adults, 2 Children",
    image: "/assets/images/room-3.jpg",
  },
  {
    name: "Presidential Suite",
    price: "$500/night",
    description: "Our most luxurious suite with exclusive amenities and breathtaking views.",
    sleeps: "6 Adults",
    image: "/assets/images/room-4.jpg",
  },
];

export default function Rooms() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/images/rooms-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-white text-5xl font-bold">Our Rooms</h1>
          </div>
        </div>
      </section>

      {/* Booking Component */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto">
          <Booking />
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50] mb-10">Choose Your Room</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-[#a77b50] mb-2">{room.name}</h3>
                <p className="text-gray-600">{room.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <strong>Sleeps:</strong> {room.sleeps}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Price:</strong> {room.price}
                  </p>
                </div>
                <button className="mt-6 px-6 py-2 text-white bg-[#a77b50] hover:bg-opacity-90 rounded-md transition">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
