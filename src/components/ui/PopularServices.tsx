import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import boardExams from "../../assets/popularServices/1.jpg";
import neetJee from "../../assets/popularServices/2.jpg";
import satAct from "../../assets/popularServices/3.jpg";
import english from "../../assets/popularServices/4.jpg";
import resume from "../../assets/popularServices/5.jpg";
import upsc from "../../assets/popularServices/6.jpg";
import writing from "../../assets/popularServices/7.jpg";
import workshops from "../../assets/popularServices/8.jpg";
import stem from "../../assets/popularServices/9.jpg";
import extracurricular from "../../assets/popularServices/10.jpg";
import scholarships from "../../assets/popularServices/11.jpg";

const CARD_WIDTH = 250;
const CARD_HEIGHT = 250;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;
const BREAKPOINTS = {
  sm: 640,

  lg: 1024,
};

const PopularServices = () => {
  const [ref, { width }] = useMeasure();

  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }

    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }

    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      id="popularservices"
      className="relative z-20 mt-20 font1"
      ref={ref}
    >
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}

        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-2xl font-bold ">
            Popular educational Services
          </p>

          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}

        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-600/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>

          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-600/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

// -----------------------------------
const Card = ({ img, title }: ItemType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <p className="my-2 text-3xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default PopularServices;

type ItemType = {
  id: number;
  img: string;
  title: string;
};
const items: ItemType[] = [
  {
    id: 1,
    img: boardExams,
    title: "Tutoring for Board Exams",
  },
  {
    id: 2,
    img: neetJee,
    title: "NEET/JEE Preparation Coaching",
  },
  {
    id: 3,
    img: satAct,
    title: "SAT/ACT Test Prep",
  },
  {
    id: 4,
    img: english,
    title: "English Language Improvement",
  },
  {
    id: 5,
    img: resume,
    title: "Resume Building and Career Counseling",
  },
  {
    id: 6,
    img: upsc,
    title: "Competitive Exam Coaching",
  },
  {
    id: 7,
    img: writing,
    title: "Project and Dissertation Guidance",
  },
  {
    id: 8,
    img: workshops,
    title: "Study Skills and Time Management Workshops",
  },
  {
    id: 9,
    img: stem,
    title: "Online Coding Classes and STEM Workshops",
  },
  {
    id: 10,
    img: extracurricular,
    title: "Art and Music Classes",
  },
  {
    id: 11,
    img: scholarships,
    title: "Scholarship and College Application Assistance",
  },
];
