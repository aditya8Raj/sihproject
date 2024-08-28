import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import logo from "../../assets/footerLogo.png";

const Footer: React.FC = () => {
  return (
    <div className="relative z-20 mt-16 bg-black text-white">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="black"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="GyaanDrip"
              className="inline-flex items-center"
            >
              <img src={logo} alt="GyaanDrip Logo" width="230" />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm">
                GyaanDrip is dedicated to empowering students across India by
                providing top-tier educational resources and cutting-edge
                learning technologies.
              </p>
              <p className="mt-4 text-sm">
                Join us in revolutionizing the way education is delivered in the
                digital age. Learn smarter, not harder, with GyaanDrip.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Resources
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/courses"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/resources"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Study Materials
                  </a>
                </li>
                <li>
                  <a
                    href="/career"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Career Planning
                  </a>
                </li>
                <li>
                  <a
                    href="/upskill"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Upskill
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Community
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/forums"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Discussion Forums
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                About Us
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/about"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Legal
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/disclaimer"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} GyaanDrip. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://twitter.com"
              className="transition-colors duration-300    hover:text-teal-accent-400"
            >
              <BsTwitterX className="h-5" />
            </a>
            <a
              href="https://instagram.com"
              className="transition-colors duration-300    hover:text-teal-accent-400"
            >
              <BsInstagram className="h-5" />
            </a>
            <a
              href="https://facebook.com"
              className="transition-colors duration-300    hover:text-teal-accent-400"
            >
              <BsFacebook className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
