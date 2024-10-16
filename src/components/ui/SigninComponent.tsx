import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import signinImage from "../../assets/signinImage.jpg";
import { Link } from "react-router-dom";

const SigninComponent: React.FC = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Form />
      <SupplementalContent />
    </section>
  );
};

const Form: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="relative z-20 flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-black font1 my-10"
        >
          Welcome Back!
        </motion.h1>

        <motion.p
          variants={primaryVariants}
          className="mb-8 text-center font2 font-medium"
        >
          Access your account to connect with tutors or manage your teaching
          profile.
        </motion.p>

        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium font1"
            >
              Email<span className="text-red-600">*</span>
            </label>

            <input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              className="font2 font-semibold w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="password-input"
              className="mb-1 inline-block text-sm font-medium font1"
            >
              Password<span className="text-red-600">*</span>
            </label>

            <input
              id="password-input"
              type="password"
              placeholder="Enter your password"
              className="font2 font-semibold w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            type="submit"
            className="font1 mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Sign In
          </motion.button>

          <motion.p variants={primaryVariants} className="text-xs font2">
            Don't have an account?{" "}
            <Link className="text-indigo-600 underline" to="/register">
              Register here
            </Link>
          </motion.p>
        </form>
      </div>
    </motion.div>
  );
};

const SupplementalContent: React.FC = () => {
  return (
    <div className="z-20 group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
      <img
        alt="signin-Image"
        src={signinImage}
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
      >
        <motion.h2
          className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl font1"
          variants={primaryVariants}
        >
          Connecting Students
          <br />
          with Expert Tutors
        </motion.h2>

        <motion.p
          variants={primaryVariants}
          className="mb-6 max-w-md text-sm text-slate-300 font2"
        >
          GyaanDrip connects students with expert educators, offering
          top-quality learning and personalized support. Find the perfect tutor
          to achieve your academic goals with us.
        </motion.p>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <motion.img
              variants={avatarVariants}
              className="h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="https://www.hover.dev/imgs/head-shots/1.jpg"
            />

            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="https://www.hover.dev/imgs/head-shots/2.jpg"
            />

            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="https://www.hover.dev/imgs/head-shots/3.jpg"
            />

            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="https://www.hover.dev/imgs/head-shots/4.jpg"
            />

            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="https://www.hover.dev/imgs/head-shots/6.jpg"
            />
          </div>

          <div>
            <motion.div variants={primaryVariants} className="flex gap-0.5">
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />

              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />

              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />

              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />

              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />

              <span className="ml-2 text-sm text-white font2">5.0</span>
            </motion.div>

            <motion.p
              variants={primaryVariants}
              className="text-xs text-slate-300 font2"
            >
              from over 100,000 reviews
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const avatarVariants = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export default SigninComponent;
