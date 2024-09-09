import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../../../assets/writingResearchSupport/categoriesImgs/1.jpg";
import img2 from "../../../assets/writingResearchSupport/categoriesImgs/2.jpg";
import img3 from "../../../assets/writingResearchSupport/categoriesImgs/3.jpg";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  title: string;
  subCategories: { name: string; link: string }[];
  imageUrl: string;
}

// Categories data for Writing & Research Support page
const categories: Category[] = [
  {
    id: 1,
    title: "Research & Writing Help",
    subCategories: [
      {
        name: "Research Paper Guidance",
        link: "/writing-research-support/research-paper-guidance",
      },
      {
        name: "Essay Writing Assistance",
        link: "/writing-research-support/essay-writing-assistance",
      },
      {
        name: "Thesis & Dissertation Support",
        link: "/writing-research-support/thesis-dissertation-support",
      },
      {
        name: "Proofreading & Editing",
        link: "/writing-research-support/proofreading-editing",
      },
      {
        name: "Plagiarism Check & Prevention",
        link: "/writing-research-support/plagiarism-check-prevention",
      },
    ],
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Academic Consulting",
    subCategories: [
      {
        name: "College Application Essays",
        link: "/writing-research-support/college-application-essays",
      },
      {
        name: "Statement of Purpose (SOP)",
        link: "/writing-research-support/statement-of-purpose-sop",
      },
      {
        name: "Personal Statement Writing",
        link: "/writing-research-support/personal-statement-writing",
      },
      {
        name: "Scholarship Essay Assistance",
        link: "/writing-research-support/scholarship-essay-assistance",
      },
      {
        name: "Academic Writing Workshops",
        link: "/writing-research-support/academic-writing-workshops",
      },
    ],
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Editing & Formatting",
    subCategories: [
      {
        name: "Document Formatting",
        link: "/writing-research-support/document-formatting",
      },
      {
        name: "Citation & Referencing Help",
        link: "/writing-research-support/citation-referencing-help",
      },
      {
        name: "Professional Editing",
        link: "/writing-research-support/professional-editing",
      },
      {
        name: "Bibliography Management",
        link: "/writing-research-support/bibliography-management",
      },
      {
        name: "Manuscript Editing",
        link: "/writing-research-support/manuscript-editing",
      },
    ],
    imageUrl: img3,
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
