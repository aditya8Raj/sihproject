import { useEffect, useState } from "react";
import { AnimationProps, motion } from "framer-motion";
import Lottie from "lottie-react";
import { Search } from "lucide-react";
import heroLottie from "../../assets/heroLottie.json";

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-heroBg text-black">
        <Content />

        <Beams />

        <GradientGrid />
      </section>
    </>
  );
};

// ----------------------------

const Content = () => {
  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <section className="w-full px-8 py-3 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <div>
            <GlowingChip>✨ Register Yourself Now 🚀</GlowingChip>
            <h1 className="text-5xl md:text-7xl font-extrabold font1">
              Start Your Future Education
            </h1>
            <p className="text-base md:text-lg my-4 md:my-6 font-semibold">
              Smart education tailored to help you learn more effectively,
              efficiently, and flexibly.
            </p>
            <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  placeholder="what do you want to learn ?"
                  className="pl-10 bg-transparent ring-0 outline-none border border-neutral-500 text-black font-bold placeholder-gray-700 placehol text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-90 focus:border-violet-500 block w-full p-2.5"
                  type="text"
                />
              </div>
            </div>
          </div>
          <Lottie animationData={heroLottie} loop={true} />
        </section>
      </motion.div>
    </div>
  );
};

const GlowingChip = ({ children }: { children: string }) => {
  return (
    <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0">
      {children}

      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
    </span>
  );
};

const Beams = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,

      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,

      transition: {
        duration: 3.5,

        repeatDelay: 5,

        delay: 2,
      },
    },

    {
      top: GRID_BOX_SIZE * 12,

      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,

      transition: {
        duration: 3.5,

        repeatDelay: 10,

        delay: 4,
      },
    },

    {
      top: GRID_BOX_SIZE * 3,

      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },

    {
      top: GRID_BOX_SIZE * 9,

      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,

      transition: {
        duration: 2,

        repeatDelay: 7.5,

        delay: 3.5,
      },
    },

    {
      top: 0,

      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,

      transition: {
        duration: 3,

        repeatDelay: 2,

        delay: 1,
      },
    },

    {
      top: GRID_BOX_SIZE * 2,

      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,

      transition: {
        duration: 5,

        repeatDelay: 5,

        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,

    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Beam = ({ top, left, transition = {} }: BeamType) => {
  return (
    <motion.div
      initial={{
        y: 0,

        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],

        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",

        duration: 3,

        repeat: Infinity,

        repeatDelay: 1.5,

        ...transition,
      }}
      style={{
        top,

        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
    />
  );
};

const GradientGrid = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,

        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          opacity: 0.7, // Adjust the opacity to make it lighter
          filter: "blur(3.5px)", // Adjust the blur amount as needed
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-orange-500" />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 32;

const BEAM_WIDTH_OFFSET = 1;

type WindowSize = {
  width: number | undefined;

  height: number | undefined;
};

type BeamType = {
  top: number;

  left: number;

  transition?: AnimationProps["transition"];
};

export default HeroSection;
