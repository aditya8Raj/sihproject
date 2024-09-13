import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SiLibreofficemath } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";
import { TbMessageLanguage, TbPencilQuestion } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { PiExamDuotone } from "react-icons/pi";
import heroImg from "../../assets/codingLessons/hero.jpg";
import Categories from "../categories/codingLessons/Categories";

const CodingLessons: React.FC = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };
  return (
    <>
      {/* ------------------ */}
      <div className="relative z-20 px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={heroImg}
              alt="hero-img"
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl font1">
              STEM & Coding Lessons
            </h5>
            <p className="mb-5 text-gray-800 font2">
              Personalized tutoring across subjects to enhance academic
              performance.
            </p>
          </div>
        </div>
      </div>
      {/* ------------------ */}
      {/* ------------------ */}
      <section className="relative z-20 overflow-hidden  px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex justify-between gap-4">
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl font1">
              Top Picks in{" "}
              <span className="text-neutral-800 underline decoration-red-600">
                STEM & Coding Lessons.
              </span>
            </h2>

            <div className="flex gap-2">
              <button
                className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
                onClick={shiftLeft}
              >
                <FiChevronLeft />
              </button>

              <button
                className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
                onClick={shiftRight}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="flex gap-4 font2">
            {features.map((feat, index) => (
              <Feature
                {...feat}
                key={index}
                position={position}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ------------------ */}
      {/* ------------------ */}
      <Categories />
      {/* ------------------ */}
    </>
  );
};

// ------------------------

interface FeatureProps {
  position: number;

  index: number;

  title: string;

  description: string;

  Icon: IconType;
}

const Feature = ({
  position,

  index,

  title,

  description,

  Icon,
}: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",

        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-black text-white" : " bg-white"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />

      <h3 className="mb-8 text-3xl font-bold">{title}</h3>

      <p>{description}</p>
    </motion.div>
  );
};

export default CodingLessons;

const features = [
  {
    title: "Programming Fundamentals",
    Icon: SiLibreofficemath,
    description:
      "Get personalized help with the basics of programming languages like Python, Java, and C++.",
  },

  {
    title: "Web Development",
    Icon: MdOutlineScience,
    description:
      "Expert tutoring in HTML, CSS, and JavaScript to strengthen your web development skills.",
  },

  {
    title: "Data Science & AI",
    Icon: TbMessageLanguage,
    description:
      "Learn data analysis, machine learning, and AI concepts with hands-on projects.",
  },

  {
    title: "Mobile App Development",
    Icon: GiNotebook,
    description:
      "Comprehensive lessons in building apps using React Native and Android Studio.",
  },

  {
    title: "Cybersecurity & Ethical Hacking",
    Icon: PiExamDuotone,
    description:
      "Gain skills in securing systems, understanding vulnerabilities, and ethical hacking.",
  },

  {
    title: "Online Coding Support",
    Icon: TbPencilQuestion,
    description:
      "Quick, focused sessions to troubleshoot code and clarify programming concepts.",
  },
];
