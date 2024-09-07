import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"; // For arrow icon on hover
import img1 from "../../../assets/tutoringAcademicSupport/categoriesImgs/1.jpg";
import img2 from "../../../assets/tutoringAcademicSupport/categoriesImgs/2.jpg";
import img3 from "../../../assets/tutoringAcademicSupport/categoriesImgs/3.jpg";
import img4 from "../../../assets/tutoringAcademicSupport/categoriesImgs/4.jpg";
import img5 from "../../../assets/tutoringAcademicSupport/categoriesImgs/5.jpg";
import img6 from "../../../assets/tutoringAcademicSupport/categoriesImgs/6.jpg";
import img7 from "../../../assets/tutoringAcademicSupport/categoriesImgs/7.jpg";
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
    title: "Subject-Specific Tutoring",
    subCategories: [
      {
        name: "Math Tutoring",
        link: "/tutoring-academic-support/math-tutoring",
      },
      {
        name: "Science Tutoring",
        link: "/tutoring-academic-support/science-tutoring",
      },
      {
        name: "Humanities Tutoring",
        link: "/tutoring-academic-support/humanities-tutoring",
      },
      {
        name: "Math for Competitive Exams",
        link: "/tutoring-academic-support/math-competitive-exams",
      },
      {
        name: "Problem Solving Sessions",
        link: "/tutoring-academic-support/problem-solving-sessions",
      },
    ],
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Test Prep & Study Support",
    subCategories: [
      {
        name: "Board Exam Preparation",
        link: "/tutoring-academic-support/board-exam-preparation",
      },
      {
        name: "Competitive Exam Coaching",
        link: "/tutoring-academic-support/competitive-exam-coaching",
      },
      {
        name: "Study Resources",
        link: "/tutoring-academic-support/study-resources",
      },
      { name: "Mock Tests", link: "/tutoring-academic-support/mock-tests" },
      {
        name: "Quick Doubt Clearing",
        link: "/tutoring-academic-support/quick-doubt-clearing",
      },
    ],
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Language Learning & Support",
    subCategories: [
      {
        name: "Indian Languages Tutoring",
        link: "/tutoring-academic-support/indian-languages-tutoring",
      },
      {
        name: "Foreign Language Tutoring",
        link: "/tutoring-academic-support/foreign-language-tutoring",
      },
      {
        name: "Spoken & Written Skills",
        link: "/tutoring-academic-support/spoken-written-skills",
      },
      {
        name: "IELTS/TOEFL Preparation",
        link: "/tutoring-academic-support/ielts-toefl-preparation",
      },
      {
        name: "Conversation Practice",
        link: "/tutoring-academic-support/conversation-practice",
      },
    ],
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Skills & Career Development",
    subCategories: [
      {
        name: "Career Counseling",
        link: "/tutoring-academic-support/career-counseling",
      },
      {
        name: "Resume Building",
        link: "/tutoring-academic-support/resume-building",
      },
      {
        name: "Interview Preparation",
        link: "/tutoring-academic-support/interview-preparation",
      },
      {
        name: "Soft Skills Development",
        link: "/tutoring-academic-support/soft-skills-development",
      },
      {
        name: "Academic Skills",
        link: "/tutoring-academic-support/academic-skills",
      },
    ],
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Creative Learning & Arts",
    subCategories: [
      {
        name: "Arts & Design Tutoring",
        link: "/tutoring-academic-support/arts-design-tutoring",
      },
      {
        name: "Digital Art & Animation",
        link: "/tutoring-academic-support/digital-art-animation",
      },
      {
        name: "Creative Writing",
        link: "/tutoring-academic-support/creative-writing",
      },
      {
        name: "Performing Arts Tutoring",
        link: "/tutoring-academic-support/performing-arts-tutoring",
      },
      {
        name: "Literary Analysis",
        link: "/tutoring-academic-support/literary-analysis",
      },
    ],
    imageUrl: img5,
  },
  {
    id: 6,
    title: "Academic Consulting & Advising",
    subCategories: [
      {
        name: "College Applications",
        link: "/tutoring-academic-support/college-applications",
      },
      {
        name: "Scholarship Applications",
        link: "/tutoring-academic-support/scholarship-applications",
      },
      {
        name: "Study Abroad Consulting",
        link: "/tutoring-academic-support/study-abroad-consulting",
      },
      {
        name: "Research & Thesis Support",
        link: "/tutoring-academic-support/research-thesis-support",
      },
      {
        name: "Publication Assistance",
        link: "/tutoring-academic-support/publication-assistance",
      },
    ],
    imageUrl: img6,
  },
  {
    id: 7,
    title: "Support & Study Tools",
    subCategories: [
      {
        name: "Homework Help",
        link: "/tutoring-academic-support/homework-help",
      },
      {
        name: "Assignment Assistance",
        link: "/tutoring-academic-support/assignment-assistance",
      },
      {
        name: "Essay Proofreading",
        link: "/tutoring-academic-support/essay-proofreading",
      },
      {
        name: "Doubt Clearing Sessions",
        link: "/tutoring-academic-support/doubt-clearing-sessions",
      },
      {
        name: "Study Group Facilitation",
        link: "/tutoring-academic-support/study-group-facilitation",
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
          Explore Tutoring & Academic Support
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
