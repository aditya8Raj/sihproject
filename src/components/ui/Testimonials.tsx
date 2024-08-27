import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import starsLeft from "../../assets/stars-left.svg";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;
const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);
const ROTATE_DEG = 2.5;
const STAGGER = 15;
const CENTER_STAGGER = -65;
const SECTION_HEIGHT = 600;

const Testimonials = () => {
  const [cardSize, setCardSize] = useState<number>(CARD_SIZE_LG);

  const [testimonials, setTestimonials] =
    useState<TestimonialType[]>(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    handleSetCardSize(); // Initial call to set the card size
    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <>
      <div className="relative z-20 max-w-md mx-auto text-center">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Testimonials
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 mx-auto">
          <span className="relative inline-block">
            <img
              src={starsLeft}
              alt=""
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            />
            <span className="relative">Stories</span>
          </span>{" "}
          that inspire
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          See what our users have to say about their experience with GyaanDrip.
        </p>
      </div>
      <div
        className="relative z-20 w-full overflow-hidden"
        style={{
          height: SECTION_HEIGHT,
        }}
      >
        {testimonials.map((t, idx) => {
          let position = 0;

          if (testimonials.length % 2) {
            position = idx - (testimonials.length + 1) / 2;
          } else {
            position = idx - testimonials.length / 2;
          }

          return (
            <TestimonialCard
              key={t.tempId}
              testimonial={t}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
          <button
            onClick={() => handleMove(-1)}
            className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

// ----------------------------

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: (position: number) => void;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
        absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 ${
          isActive ? "z-10 bg-indigo-600" : "z-0 bg-white"
        }
      `}
      style={{
        borderWidth: BORDER_SIZE,
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px black" : "0px 0px 0px 0px black",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-black object-cover"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px white",
        }}
      />
      <h3
        className={`text-base sm:text-xl ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isActive ? "text-indigo-200" : "text-neutral-700"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial:
      "GyaanDrip has transformed my learning experience. The interactive content makes studying so much more engaging.",
    by: "Rohit Sharma, Student at IIT Delhi",
    imgSrc: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    tempId: 1,
    testimonial:
      "The career planning tools on GyaanDrip helped me secure an internship at a top tech company. Highly recommend!",
    by: "Ananya Kapoor, Engineering Graduate",
    imgSrc: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    tempId: 2,
    testimonial:
      "Thanks to GyaanDrip, my son aced his board exams. The resources and study materials are top-notch!",
    by: "Suresh Patel, Parent",
    imgSrc: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    tempId: 3,
    testimonial:
      "GyaanDrip’s coding challenges and gamified learning are a game-changer for students who want to upskill quickly.",
    by: "Priya Singh, Software Developer",
    imgSrc: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    tempId: 4,
    testimonial:
      "The digital library on GyaanDrip is vast and incredibly useful. I found all the materials I needed in one place.",
    by: "Vikram Joshi, MBA Student",
    imgSrc: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    tempId: 5,
    testimonial:
      "GyaanDrip’s assessment feedback is personalized and spot on. It’s helped me improve significantly over the past months.",
    by: "Neha Agarwal, Class 12 Student",
    imgSrc: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    tempId: 6,
    testimonial:
      "Connecting with mentors and alumni through GyaanDrip was a breeze. It’s an excellent platform for career growth.",
    by: "Rahul Mehta, Final Year B.Tech Student",
    imgSrc: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    tempId: 7,
    testimonial:
      "The weekly skill challenges on GyaanDrip have kept me motivated to keep learning. It’s a fun way to stay sharp.",
    by: "Aditi Rao, Web Developer",
    imgSrc: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    tempId: 8,
    testimonial:
      "GyaanDrip is the future of education. The platform’s intuitive design and valuable resources make it a must-have.",
    by: "Pooja Iyer, Data Analyst",
    imgSrc: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    tempId: 9,
    testimonial:
      "I never thought online learning could be this effective until I started using GyaanDrip. It’s a game-changer.",
    by: "Manish Kumar, Mechanical Engineering Student",
    imgSrc: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    tempId: 10,
    testimonial:
      "The study materials and practice exams on GyaanDrip were crucial in helping me clear my entrance exams.",
    by: "Sanjana Deshmukh, Medical Aspirant",
    imgSrc: "https://randomuser.me/api/portraits/men/93.jpg",
  },
  {
    tempId: 11,
    testimonial:
      "GyaanDrip’s tools for collaboration have made working on projects so much more efficient and enjoyable.",
    by: "Kunal Verma, M.Tech Student",
    imgSrc: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];

export default Testimonials;
