import React from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const Categories = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
      <div className="max-w-xl mb-10 mx-auto text-center">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Explore
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Discover</span>
          </span>{" "}
          the Features of GyaanDrip
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Unlock your potential with our comprehensive educational platform.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        <div className="space-y-6">
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaBook className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">Courses</h6>
              <p className="text-sm text-gray-900">
                Browse and enroll in a variety of courses to enhance your
                knowledge and skills.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaChalkboardTeacher className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">Resources</h6>
              <p className="text-sm text-gray-900">
                Access study materials, lecture notes, video tutorials, and
                more.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaGraduationCap className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Career Planning
              </h6>
              <p className="text-sm text-gray-900">
                Explore career resources, job placements, internships, and
                mentorship programs.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaLaptopCode className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">Upskill</h6>
              <p className="text-sm text-gray-900">
                Participate in interactive learning activities, weekly
                assessments, and skill development challenges.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaChartLine className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Monthly Assessment
              </h6>
              <p className="text-sm text-gray-900">
                Receive monthly analysis of your performance with personalized
                feedback and suggestions.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaUsers className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Team-Building & Collaboration
              </h6>
              <p className="text-sm text-gray-900">
                Connect with peers for projects or competitions and access
                collaboration tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
