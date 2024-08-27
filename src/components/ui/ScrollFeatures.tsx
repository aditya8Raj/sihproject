import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Lottie from "lottie-react";
import lottie1 from "../../assets/scrollLotties/animation_1.json";
import lottie2 from "../../assets/scrollLotties/animation_2.json";
import lottie3 from "../../assets/scrollLotties/animation_3.json";

const ScrollFeatures: React.FC = () => {
  return (
    <>
      <div className="relative h-fit z-20 pb-20">
        <Features />
      </div>
    </>
  );
};

const Features: React.FC = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy: React.FC = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center md:sticky md:top-0 md:h-screen">
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        Bharat’s Biggest & Most Trusted Educational Platform
      </h2>
      <p className="text-lg text-indigo-950">
        Unlock your potential by signing up with Gyaan Drip - The most
        cost-effective learning solution
      </p>
    </div>
  );
};

const Carousel: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={3}
          animationData={lottie1}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={3}
          animationData={lottie2}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={3}
          animationData={lottie3}
        />
        {/* <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
          animationData={lottie1}
        /> */}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  animationData: unknown;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  scrollYProgress,
  position,
  numItems,
  animationData,
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        height={400}
        width={400}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </motion.div>
  );
};

export default ScrollFeatures;
