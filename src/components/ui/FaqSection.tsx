import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const FaqSection = () => {
  return (
    <div className="relative z-20 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently Asked Questions
        </h3>
        <Question title="What is GyaanDrip?" defaultOpen>
          <p>
            GyaanDrip is a Smart Education platform designed to help Indian
            students of all classes upskill through innovative learning methods,
            courses, and resources.
          </p>
        </Question>
        <Question title="Who can benefit from GyaanDrip?">
          <p>
            GyaanDrip is suitable for students of all ages and classes, as well
            as professionals looking to enhance their skills in various domains
            through our curated courses and resources.
          </p>
        </Question>
        <Question title="How do I enroll in a course?">
          <p>
            Simply browse our Courses section, select the course you're
            interested in, and follow the enrollment instructions provided. You
            can start learning right away!
          </p>
        </Question>
        <Question title="What resources are available on GyaanDrip?">
          <p>
            We offer a wide range of educational resources including video
            tutorials, e-books, practice exams, and project-based learning
            materials to help you excel in your studies.
          </p>
        </Question>
        <Question title="Is there any cost associated with using GyaanDrip?">
          <p>
            GyaanDrip offers both free and paid courses. The majority of our
            resources are free to access, but premium content is available for a
            nominal fee.
          </p>
        </Question>
      </div>
    </div>
  );
};

// ----------------------

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default FaqSection;
