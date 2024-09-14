import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"; // For arrow icon on hover
import img1 from "../../../assets/testPrepStudyResources/categoriesImgs/1.jpg";
import img2 from "../../../assets/testPrepStudyResources/categoriesImgs/2.jpg";
import img3 from "../../../assets/testPrepStudyResources/categoriesImgs/3.jpg";
import img4 from "../../../assets/testPrepStudyResources/categoriesImgs/4.jpg";
import img5 from "../../../assets/testPrepStudyResources/categoriesImgs/5.jpg";
import img6 from "../../../assets/testPrepStudyResources/categoriesImgs/6.jpg";
import img7 from "../../../assets/testPrepStudyResources/categoriesImgs/7.jpg";
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
    title: "Exam-Focused Tutoring",
    subCategories: [
      {
        name: "Math Exam Preparation",
        link: "/test-prep/math-exam-preparation",
      },
      {
        name: "Science Exam Preparation",
        link: "/test-prep/science-exam-preparation",
      },
      {
        name: "Humanities Exam Support",
        link: "/test-prep/humanities-exam-support",
      },
      {
        name: "Competitive Math Coaching",
        link: "/test-prep/competitive-math-coaching",
      },
      {
        name: "Problem Solving Sessions",
        link: "/test-prep/problem-solving-sessions",
      },
    ],
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Board & Competitive Exams",
    subCategories: [
      {
        name: "Board Exam Preparation",
        link: "/test-prep/board-exam-preparation",
      },
      {
        name: "Competitive Exam Coaching",
        link: "/test-prep/competitive-exam-coaching",
      },
      {
        name: "Study Resources",
        link: "/test-prep/study-resources",
      },
      {
        name: "Mock Tests",
        link: "/test-prep/mock-tests",
      },
      {
        name: "Quick Doubt Solving",
        link: "/test-prep/quick-doubt-solving",
      },
    ],
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Language Exam Support",
    subCategories: [
      {
        name: "Indian Language Test Prep",
        link: "/test-prep/indian-language-test-prep",
      },
      {
        name: "Foreign Language Exam Prep",
        link: "/test-prep/foreign-language-exam-prep",
      },
      {
        name: "IELTS/TOEFL Preparation",
        link: "/test-prep/ielts-toefl-preparation",
      },
      {
        name: "Writing & Speaking Skills",
        link: "/test-prep/writing-speaking-skills",
      },
      {
        name: "Conversation Practice",
        link: "/test-prep/conversation-practice",
      },
    ],
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Career & Skills Development",
    subCategories: [
      {
        name: "Career Guidance",
        link: "/test-prep/career-guidance",
      },
      {
        name: "Resume Building",
        link: "/test-prep/resume-building",
      },
      {
        name: "Interview Coaching",
        link: "/test-prep/interview-coaching",
      },
      {
        name: "Soft Skills Training",
        link: "/test-prep/soft-skills-training",
      },
      {
        name: "Academic Skills Enhancement",
        link: "/test-prep/academic-skills-enhancement",
      },
    ],
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Creative Learning Resources",
    subCategories: [
      {
        name: "Art & Design Exam Prep",
        link: "/test-prep/art-design-exam-prep",
      },
      {
        name: "Digital Art & Animation",
        link: "/test-prep/digital-art-animation",
      },
      {
        name: "Creative Writing Coaching",
        link: "/test-prep/creative-writing-coaching",
      },
      {
        name: "Performing Arts Preparation",
        link: "/test-prep/performing-arts-preparation",
      },
      {
        name: "Literary Analysis",
        link: "/test-prep/literary-analysis",
      },
    ],
    imageUrl: img5,
  },
  {
    id: 6,
    title: "Consulting & Advising",
    subCategories: [
      {
        name: "College Applications Help",
        link: "/test-prep/college-applications-help",
      },
      {
        name: "Scholarship Consulting",
        link: "/test-prep/scholarship-consulting",
      },
      {
        name: "Study Abroad Guidance",
        link: "/test-prep/study-abroad-guidance",
      },
      {
        name: "Research & Thesis Support",
        link: "/test-prep/research-thesis-support",
      },
      {
        name: "Publication Assistance",
        link: "/test-prep/publication-assistance",
      },
    ],
    imageUrl: img6,
  },
  {
    id: 7,
    title: "Support & Study Tools",
    subCategories: [
      {
        name: "Homework Assistance",
        link: "/test-prep/homework-assistance",
      },
      {
        name: "Assignment Help",
        link: "/test-prep/assignment-help",
      },
      {
        name: "Essay Proofreading",
        link: "/test-prep/essay-proofreading",
      },
      {
        name: "Doubt Solving Sessions",
        link: "/test-prep/doubt-solving-sessions",
      },
      {
        name: "Study Group Facilitation",
        link: "/test-prep/study-group-facilitation",
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
          Explore Test Prep. & Study Resources
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
