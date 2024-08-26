import { Search } from "lucide-react";
// import Lottie from "lottie-react";
// import heroLottie from "../../assets/heroLottie.json";

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-heroBg text-black">
        <Content />
      </section>
    </>
  );
};

// ----------------------------

const Content = () => {
  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
      <section className="w-full px-8 py-3 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <GlowingChip>✨ Register Yourself Now 🚀</GlowingChip>
          <h1 className="text-5xl md:text-7xl font-extrabold font1">
            Start Your Future Education
          </h1>
          <p className="text-base md:text-lg my-4 md:my-6 font-semibold font2">
            Smart education tailored to help you learn more effectively,
            efficiently, and flexibly.
          </p>
          <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:-z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                placeholder="what do you want to learn ?"
                className="font2 pl-10 bg-transparent ring-0 outline-none border border-neutral-500 text-black font-bold placeholder-gray-700 placehol text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-90 focus:border-violet-500 block w-full p-2.5"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* <Lottie animationData={heroLottie} loop={true} /> */}
      </section>
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

export default HeroSection;
