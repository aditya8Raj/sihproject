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
            GyaanDrip is an education-focused platform that connects students
            with expert tutors and allows students to also become tutors
            themselves. Whether you're looking to learn or teach, GyaanDrip
            provides opportunities to find personalized support or offer your
            expertise in various subjects.
          </p>
        </Question>
        <Question title="Who can benefit from GyaanDrip?">
          <p>
            Both students and aspiring educators can benefit from GyaanDrip.
            Students can find tutoring support, test prep, or career coaching,
            while those with expertise in specific areas can offer their skills
            and services as tutors or mentors, building a freelancing career.
          </p>
        </Question>
        <Question title="How do I enroll in a course?">
          <p>
            To enroll, simply browse through available tutors and courses in
            your preferred subject. Once you find the right tutor, you can book
            a session or enroll in a course by following the simple steps
            provided on the platform. You can also set your availability if you
            want to become a tutor.
          </p>
        </Question>
        <Question title="What resources are available on GyaanDrip?">
          <p>
            GyaanDrip offers a variety of resources, including tutoring
            services, test preparation, academic consulting, language learning,
            and career coaching. As a tutor, you can access tools to create your
            own courses, manage students, and provide personalized learning
            experiences.
          </p>
        </Question>
        <Question title="Is there any cost associated with using GyaanDrip?">
          <p>
            Yes, using GyaanDrip involves costs depending on the service.
            Students pay for the courses or tutoring sessions they enroll in,
            while tutors earn through their services. The platform offers
            flexible pricing models, and payments are only processed once
            students are satisfied with the service received.
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
