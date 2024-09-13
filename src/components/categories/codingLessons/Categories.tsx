import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"; // For arrow icon on hover
import img1 from "../../../assets/codingLessons/categoriesImgs/1.jpg";
import img2 from "../../../assets/codingLessons/categoriesImgs/2.jpg";
import img3 from "../../../assets/codingLessons/categoriesImgs/3.jpg";
import img4 from "../../../assets/codingLessons/categoriesImgs/4.jpg";
import img5 from "../../../assets/codingLessons/categoriesImgs/5.jpg";
import img6 from "../../../assets/codingLessons/categoriesImgs/6.jpg";
import img7 from "../../../assets/codingLessons/categoriesImgs/7.jpg";
import { Link } from "react-router-dom";

// Define the interface for each category
interface Category {
  id: number;
  title: string;
  subCategories: { name: string; link: string }[];
  imageUrl: string;
}

// Categories data, including the image URL for each category
const categories: Category[] = [
  {
    id: 1,
    title: "Programming Fundamentals",
    subCategories: [
      {
        name: "Introduction to Programming",
        link: "/coding-lessons/intro-to-programming",
      },
      {
        name: "Object-Oriented Programming",
        link: "/coding-lessons/oop",
      },
      {
        name: "Data Structures & Algorithms",
        link: "/coding-lessons/data-structures-algorithms",
      },
      {
        name: "Functional Programming",
        link: "/coding-lessons/functional-programming",
      },
      {
        name: "Coding Problem-Solving",
        link: "/coding-lessons/problem-solving",
      },
    ],
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Web Development",
    subCategories: [
      {
        name: "HTML & CSS",
        link: "/coding-lessons/html-css",
      },
      {
        name: "JavaScript Basics",
        link: "/coding-lessons/javascript-basics",
      },
      {
        name: "React & Front-End Frameworks",
        link: "/coding-lessons/react-frameworks",
      },
      {
        name: "Backend Development (Node.js)",
        link: "/coding-lessons/backend-development",
      },
      {
        name: "Full-Stack Development",
        link: "/coding-lessons/full-stack-development",
      },
    ],
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Data Science & AI",
    subCategories: [
      {
        name: "Introduction to Data Science",
        link: "/coding-lessons/data-science-intro",
      },
      {
        name: "Machine Learning Basics",
        link: "/coding-lessons/ml-basics",
      },
      {
        name: "Data Visualization with Python",
        link: "/coding-lessons/data-visualization-python",
      },
      {
        name: "Deep Learning",
        link: "/coding-lessons/deep-learning",
      },
      {
        name: "AI Project Development",
        link: "/coding-lessons/ai-projects",
      },
    ],
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Mobile App Development",
    subCategories: [
      {
        name: "Android Development (Java/Kotlin)",
        link: "/coding-lessons/android-development",
      },
      {
        name: "iOS Development (Swift)",
        link: "/coding-lessons/ios-development",
      },
      {
        name: "Cross-Platform Apps (React Native)",
        link: "/coding-lessons/react-native",
      },
      {
        name: "Flutter Development",
        link: "/coding-lessons/flutter-development",
      },
      {
        name: "App Store Deployment",
        link: "/coding-lessons/app-store-deployment",
      },
    ],
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Cybersecurity & Ethical Hacking",
    subCategories: [
      {
        name: "Intro to Cybersecurity",
        link: "/coding-lessons/cybersecurity-intro",
      },
      {
        name: "Ethical Hacking",
        link: "/coding-lessons/ethical-hacking",
      },
      {
        name: "Network Security",
        link: "/coding-lessons/network-security",
      },
      {
        name: "Web Application Security",
        link: "/coding-lessons/web-security",
      },
      {
        name: "Penetration Testing",
        link: "/coding-lessons/penetration-testing",
      },
    ],
    imageUrl: img5,
  },
  {
    id: 6,
    title: "DevOps & Cloud Computing",
    subCategories: [
      {
        name: "Introduction to DevOps",
        link: "/coding-lessons/devops-intro",
      },
      {
        name: "Cloud Platforms (AWS, GCP)",
        link: "/coding-lessons/cloud-platforms",
      },
      {
        name: "Containerization (Docker, Kubernetes)",
        link: "/coding-lessons/containerization",
      },
      {
        name: "CI/CD Pipeline Setup",
        link: "/coding-lessons/ci-cd-setup",
      },
      {
        name: "Infrastructure as Code (Terraform)",
        link: "/coding-lessons/terraform",
      },
    ],
    imageUrl: img6,
  },
  {
    id: 7,
    title: "Game Development",
    subCategories: [
      {
        name: "Unity Game Development",
        link: "/coding-lessons/unity-development",
      },
      {
        name: "Unreal Engine Basics",
        link: "/coding-lessons/unreal-engine",
      },
      {
        name: "2D/3D Game Design",
        link: "/coding-lessons/game-design",
      },
      {
        name: "Mobile Game Development",
        link: "/coding-lessons/mobile-game-development",
      },
      {
        name: "Game Optimization & Performance",
        link: "/coding-lessons/game-optimization",
      },
    ],
    imageUrl: img7,
  },
];

const Categories: React.FC = () => {
  return (
    <>
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-8 text-center my-20">
        <h2 className="text-3xl font-bold mb-6 text-center font1">
          Explore STEM & Coding Lessons
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
