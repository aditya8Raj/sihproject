import React from "react";

const MightBeInterested: React.FC = () => {
  return (
    <div className="relative z-20 w-full text-center mt-8 mb-28">
      <h2 className="text-xl font-semibold mb-4">
        You might be interested in Programming & Tech
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// --------------------

const tags = [
  "Online Tutoring",
  "Competitive Exam Prep",
  "Academic Consulting",
  "STEM Lessons",
  "Creative Writing Classes",
  "IELTS Coaching",
  "Foreign Language Tutoring",
  "Resume Building",
  "Study Resources",
  "Scholarship Guidance",
  "Career Counseling",
  "Arts & Design Tutoring",
  "Homework Help",
  "Coding Lessons",
  "Board Exam Preparation",
  "Soft Skills Training",
  "Study Abroad Consulting",
  "Mock Tests",
];

export default MightBeInterested;
