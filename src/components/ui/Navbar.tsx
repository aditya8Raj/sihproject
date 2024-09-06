import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { SearchIcon } from "./SearchIcon";
import { Input } from "@nextui-org/react";
import logo from "../../assets/navLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

// --------------------------
const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50 ? true : false);
  });

  return (
    <nav
      className={` border-navBorder border-b backdrop-blur-sm font2 fixed top-0 z-50 w-full px-6 transition-all duration-300 ease-out lg:px-12 ${
        scrolled
          ? "bg-white/50 backdrop-blur-md py-3 shadow-xl "
          : "bg-neutral-950/0 py-3 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden gap-6 lg:flex ">
          <Links />
          <div className="relative rounded-lg max-w-full sm:max-w-[10rem] h-10 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg text-white"></div>

          <CTAs />
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="nav-log" width="230" />
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6 ">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({
  children,

  href,

  FlyoutContent,
}: {
  children: React.ReactNode;

  href: string;

  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit hover:text-red-500"
    >
      <a href={href} className="relative">
        {children}

        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />

            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <Link to="/signin">
        <button className="flex items-center gap-2 rounded-lg border-2 border-blue-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 ">
          <FaUserCircle />

          <span>Sign in</span>
        </button>
      </Link>

      <Link to="/register">
        <button className="rounded-lg border-2 border-blue-700 bg-blue-700 px-4 py-2 font-semibold text-black transition-colors hover:border-blue-900 hover:bg-blue-900 hover:text-white">
          Join for Free
        </button>
      </Link>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">Services</h2>

          <p className="mb-6 max-w-xs text-sm text-neutral-400">
            Services you can take and can offer.
          </p>
        </div>

        <span className="flex items-center gap-1 text-xs text-indigo-300">
          ✨ GyaanDrip 🧠
        </span>
      </div>

      <div className="col-span-12 grid grid-cols-2 grid-rows-4 gap-3 bg-white p-6 lg:col-span-8">
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">Tutoring & Academic Support</h3>

          <p className="text-xs">
            Personalized tutoring across subjects to enhance academic
            performance.
          </p>
        </a>

        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">Language Learning</h3>

          <p className="text-xs">
            Master new languages through expert-led lessons and immersive
            learning experiences.
          </p>
        </a>

        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">Career Coaching</h3>

          <p className="text-xs">
            Get professional guidance for career growth, resume building, and
            interview prep.
          </p>
        </a>

        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">Writing & Research Support</h3>

          <p className="text-xs">
            Assistance with essays, research papers, editing, and academic
            writing.
          </p>
        </a>

        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">STEM & Coding Lessons</h3>

          <p className="text-xs">
            Learn coding, robotics, and STEM subjects from experienced tutors.
          </p>
        </a>

        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">Test Prep & Study Resources</h3>

          <p className="text-xs">
            Prep for exams like JEE, NEET, SAT, and more with tailored study
            materials.
          </p>
        </a>

        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">Academic Consulting & Advising</h3>

          <p className="text-xs">
            Expert advice on college applications, scholarships, and research
            projects.
          </p>
        </a>

        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-200"
        >
          <h3 className="mb-1 font-semibold">Arts & Creative Learning</h3>

          <p className="text-xs">
            Explore your creative side with lessons in art, music, photography,
            and more.
          </p>
        </a>
      </div>
    </div>
  );
};

const MobileMenuLink = ({
  children,

  href,

  FoldContent,

  setMenuOpen,
}: {
  children: React.ReactNode;

  href: string;

  FoldContent?: React.ElementType;

  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ref, { height }] = useMeasure();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();

              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>

          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,

              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();

            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>

          <FiArrowRight />
        </a>
      )}

      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",

            marginBottom: open ? "24px" : "0px",

            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>

            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6 hover:text-red-500">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[15rem] h-12 border border-black rounded-md text-black font-bold ",
                  mainWrapper: "h-full",
                  input: "text-medium",
                  inputWrapper: "h-full ",
                }}
                placeholder="Type to search..."
                size="md"
                startContent={<SearchIcon size={20} />}
                type="search"
              />
            </div>

            <div className="flex justify-center bg-neutral-950 p-20">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

const LINKS = [
  {
    text: "Services",

    href: "#",

    component: AboutUsContent,
  },

  {
    text: "Popular Services",

    href: "#popularservices",
  },

  {
    text: "Become a Tutor",

    href: "#",
  },

  {
    text: "Resources",

    href: "#",
  },
];
