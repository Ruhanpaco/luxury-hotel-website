"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaUtensils, FaWineGlass } from "react-icons/fa";

type CategoryMap = {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
};

type DrinkCategoryMap = {
  alcohol: string[];
  nonAlcohol: string[];
  wines: string[];
};

const categories: CategoryMap = {
  breakfast: [
    "/assets/images/breakfast1.jpg",
    "/assets/images/breakfast2.jpg",
    "/assets/images/breakfast3.jpg",
  ],
  lunch: [
    "/assets/images/lunch1.jpg",
    "/assets/images/lunch2.jpg",
    "/assets/images/lunch3.jpg",
  ],
  dinner: [
    "/assets/images/dinner1.jpg",
    "/assets/images/dinner2.jpg",
    "/assets/images/dinner3.jpg",
  ],
};

const drinkCategories: DrinkCategoryMap = {
  alcohol: [
    "/assets/images/cocktail1.jpg",
    "/assets/images/cocktail2.jpg",
    "/assets/images/cocktail3.jpg",
  ],
  nonAlcohol: [
    "/assets/images/drink1.jpg",
    "/assets/images/drink2.jpg",
    "/assets/images/drink3.jpg",
  ],
  wines: [
    "/assets/images/wine1.jpg",
    "/assets/images/wine2.jpg",
    "/assets/images/wine3.jpg",
  ],
};

export default function RestaurantBarPage() {
  const [dishCategory, setDishCategory] = useState<keyof CategoryMap>("breakfast");
  const [drinkCategory, setDrinkCategory] = useState<keyof DrinkCategoryMap>("alcohol");

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[#a77b50] text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Restaurant & Bar</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Immerse yourself in a luxurious dining and bar experience that caters to every taste.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Breakfast",
              description:
                "Join us for breakfast daily from 7:00 AM to 10:00 AM. Delight in a variety of freshly prepared options to kickstart your day with energy and flavor.",
              icon: <FaCoffee />,
            },
            {
              title: "Lunch",
              description:
                "Join us for lunch daily from 12:00 PM to 3:00 PM. Indulge in a variety of delicious options crafted with care and flavor to satisfy your midday cravings.",
              icon: <FaUtensils />,
            },
            {
              title: "Dinner",
              description:
                "Join us for dinner daily from 6:00 PM to 10:00 PM. Explore a menu of exquisite flavors crafted with seasonal ingredients to elevate your dining experience.",
              icon: <FaWineGlass />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-[#a77b50] text-white text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#a77b50]">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dishes Gallery */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50]">Our Dishes</h2>
          <nav className="mt-6 space-x-6">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setDishCategory(category as keyof CategoryMap)}
                className={`px-4 py-2 rounded-md ${
                  dishCategory === category
                    ? "bg-[#a77b50] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </nav>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {categories[dishCategory].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Dish ${index + 1}`}
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Drinks Gallery */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a77b50]">Our Drinks</h2>
          <nav className="mt-6 space-x-6">
            {Object.keys(drinkCategories).map((category) => (
              <button
                key={category}
                onClick={() => setDrinkCategory(category as keyof DrinkCategoryMap)}
                className={`px-4 py-2 rounded-md ${
                  drinkCategory === category
                    ? "bg-[#a77b50] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </nav>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {drinkCategories[drinkCategory].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Drink ${index + 1}`}
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
