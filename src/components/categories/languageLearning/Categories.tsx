import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../../../assets/languageLearning/categoriesImgs/1.jpg";
import img2 from "../../../assets/languageLearning/categoriesImgs/2.jpg";
import img3 from "../../../assets/languageLearning/categoriesImgs/3.jpg";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  title: string;
  subCategories: { name: string; link: string }[];
  imageUrl: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Language Learning & Support",
    subCategories: [
      {
        name: "Indian Languages Tutoring",
        link: "/language-learning/indian-languages-tutoring",
      },
      {
        name: "Foreign Language Tutoring",
        link: "/language-learning/foreign-language-tutoring",
      },
      {
        name: "Spoken & Written Skills",
        link: "/language-learning/spoken-written-skills",
      },
      {
        name: "IELTS/TOEFL Preparation",
        link: "/language-learning/ielts-toefl-preparation",
      },
      {
        name: "Conversation Practice",
        link: "/language-learning/conversation-practice",
      },
    ],
    imageUrl: img1, // Replace with relevant image for Language Learning
  },
  {
    id: 2,
    title: "Digital Language Tools",
    subCategories: [
      {
        name: "Language Learning Apps",
        link: "/language-learning/language-learning-apps",
      },
      {
        name: "AI-Based Language Learning",
        link: "/language-learning/ai-language-learning",
      },
      {
        name: "Speech Recognition & Correction",
        link: "/language-learning/speech-recognition",
      },
      {
        name: "Virtual Language Labs",
        link: "/language-learning/virtual-language-labs",
      },
      {
        name: "Interactive Language Games",
        link: "/language-learning/interactive-language-games",
      },
    ],
    imageUrl: img2, // Replace with relevant image for Digital Tools
  },
  {
    id: 3,
    title: "Cultural Immersion & Language",
    subCategories: [
      {
        name: "Cultural Exchange Programs",
        link: "/language-learning/cultural-exchange-programs",
      },
      {
        name: "Language Through Film & Media",
        link: "/language-learning/film-media",
      },
      {
        name: "Learning Through Music",
        link: "/language-learning/music",
      },
      {
        name: "Cultural Language Workshops",
        link: "/language-learning/cultural-workshops",
      },
      {
        name: "Language Proficiency Testing",
        link: "/language-learning/proficiency-testing",
      },
    ],
    imageUrl: img3, // Replace with relevant image for Cultural Immersion
  },
];

const Categories: React.FC = () => {
  return (
    <>
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-8 text-center my-20 ">
        <h2 className="text-3xl font-bold mb-6 text-center font1">
          Explore Tutoring & Academic Support
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image section */}
              <div className="h-48 overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Content section */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 font1">
                  {category.title}
                </h3>
                <ul className="space-y-2 font2">
                  {category.subCategories.map((subCategory, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-700 flex justify-between items-center p-2 hover:bg-gray-300 rounded-lg"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={subCategory.link}
                        className="flex items-center w-full"
                      >
                        {subCategory.name}
                        <FiArrowRight className="opacity-0 hover:opacity-100 transition-opacity duration-300 ml-2" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
