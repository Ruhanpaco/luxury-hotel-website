"use client";

import React from "react";

interface MiniCardProps {
  icon: React.ReactNode; // Icon element (React Icon or any JSX)
  title: string;         // Title of the card
}

const MiniCard: React.FC<MiniCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border rounded-lg shadow-sm hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
      <div className="text-6xl text-gray-700 mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

export default MiniCard;
