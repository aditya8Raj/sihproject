import React from "react";
import ShinyButton from "@/components/magicui/shiny-button";

const CallToAction: React.FC = () => {
  return (
    <section className="relative z-20 py-10 mt-7">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="isolate flex justify-center -space-x-2">
            <img
              className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://randomuser.me/api/portraits/men/39.jpg"
              alt="Rajesh Kumar"
            />
            <img
              className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://randomuser.me/api/portraits/women/88.jpg"
              alt="Anita Sharma"
            />
            <img
              className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Vikram Singh"
            />
            <img
              className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://randomuser.me/api/portraits/women/38.jpg"
              alt="Priya Verma"
            />
          </div>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
            Join <span className="border-b-8 border-red-400">5,482</span> other
            students
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
            Discover cutting-edge resources, connect with industry experts, and
            elevate your skills in a community built for innovation.
          </p>

          <ShinyButton
            text="Register Now"
            className="mt-8 bg-black text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
