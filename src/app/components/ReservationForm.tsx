"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <motion.div
      className="w-full bg-[#a77b50] text-white shadow-md rounded-lg p-4 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Check-In */}
        <div className="flex flex-col">
          <label htmlFor="checkIn" className="text-sm font-medium mb-1">
            Check in:
          </label>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-36 px-2 py-1 bg-transparent border border-white rounded-md text-white placeholder-white text-sm focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        {/* Check-Out */}
        <div className="flex flex-col">
          <label htmlFor="checkOut" className="text-sm font-medium mb-1">
            Check out:
          </label>
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-36 px-2 py-1 bg-transparent border border-white rounded-md text-white placeholder-white text-sm focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        {/* Rooms */}
        <div className="flex flex-col">
          <label htmlFor="rooms" className="text-sm font-medium mb-1">
            Rooms:
          </label>
          <select
            id="rooms"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="w-24 px-2 py-1 bg-transparent border border-white rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-white"
          >
            {[...Array(10).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Adults */}
        <div className="flex flex-col">
          <label htmlFor="adults" className="text-sm font-medium mb-1">
            Adults:
          </label>
          <select
            id="adults"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-24 px-2 py-1 bg-transparent border border-white rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-white"
          >
            {[...Array(10).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Children */}
        <div className="flex flex-col">
          <label htmlFor="children" className="text-sm font-medium mb-1">
            Children:
          </label>
          <select
            id="children"
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="w-24 px-2 py-1 bg-transparent border border-white rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-white"
          >
            {[...Array(10).keys()].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Check Availability
          </button>
        </div>
      </div>
    </motion.div>
  );
}
