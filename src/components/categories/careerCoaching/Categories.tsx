import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../../../assets/careerCoaching/categoriesImgs/1.jpg";
import img2 from "../../../assets/careerCoaching/categoriesImgs/2.jpg";
import img3 from "../../../assets/careerCoaching/categoriesImgs/3.jpg";
import img4 from "../../../assets/careerCoaching/categoriesImgs/4.jpg";
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
    title: "Career Guidance",
    subCategories: [
      {
        name: "Career Counseling",
        link: "/career-coaching/career-counseling",
      },
      {
        name: "Personalized Career Paths",
        link: "/career-coaching/personalized-career-paths",
      },
      {
        name: "Job Market Trends",
        link: "/career-coaching/job-market-trends",
      },
      {
        name: "Mentorship Programs",
        link: "/career-coaching/mentorship-programs",
      },
    ],
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Resume & Profile Building",
    subCategories: [
      {
        name: "Resume Crafting",
        link: "/career-coaching/resume-crafting",
      },
      {
        name: "LinkedIn Profile Optimization",
        link: "/career-coaching/linkedin-profile-optimization",
      },
      {
        name: "Portfolio Development",
        link: "/career-coaching/portfolio-development",
      },
      {
        name: "Cover Letter Writing",
        link: "/career-coaching/cover-letter-writing",
      },
    ],
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Interview & Professional Skills",
    subCategories: [
      {
        name: "Mock Interviews",
        link: "/career-coaching/mock-interviews",
      },
      {
        name: "Interview Techniques",
        link: "/career-coaching/interview-techniques",
      },
      {
        name: "Communication Skills",
        link: "/career-coaching/communication-skills",
      },
      {
        name: "Public Speaking",
        link: "/career-coaching/public-speaking",
      },
    ],
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Soft Skills & Personal Development",
    subCategories: [
      {
        name: "Time Management",
        link: "/career-coaching/time-management",
      },
      {
        name: "Leadership Skills",
        link: "/career-coaching/leadership-skills",
      },
      {
        name: "Team Collaboration",
        link: "/career-coaching/team-collaboration",
      },
      {
        name: "Emotional Intelligence",
        link: "/career-coaching/emotional-intelligence",
      },
    ],
    imageUrl: img4,
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
