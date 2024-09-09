import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const Categories = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl mt-10">
      <div className="max-w-xl  mx-auto text-center">
        <div>
          <p className="font2 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            ✨ GyanDrip 🧠
          </p>
        </div>
        <h2 className="max-w-lg mb-2 font1 text-3xl font-bold leading-none tracking-tight text-gray-900 mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Key</span>
          </span>{" "}
          Benefits for Students
        </h2>
        <p className="text-base text-gray-700 md:text-lg font2">
          Unlock your potential with our comprehensive educational platform.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-screen-lg mx-auto mt-10">
        <div className="space-y-6">
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaBook className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 font1">
                Over 50 Educational Services
              </h6>
              <p className="text-sm text-gray-900 font2">
                Access a wide variety of educational services provided by expert
                tutors and educators, tailored to your learning needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaChalkboardTeacher className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 font1">
                Transparent & Flexible Pricing
              </h6>
              <p className="text-sm text-gray-900 font2">
                Choose from affordable plans, pay per service or opt for custom
                packages. Payments are processed only when you're satisfied with
                the results.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaGraduationCap className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 font1">
                Fast, High-Quality Learning Support
              </h6>
              <p className="text-sm text-gray-900 font2">
                Quickly find qualified educators for your specific academic
                needs and receive top-notch educational support in a timely
                manner.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FaLaptopCode className="w-8 h-8 text-indigo-600 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 font1">
                24/7 Dedicated Student Support
              </h6>
              <p className="text-sm text-gray-900">
                Our support team is here to help you resolve issues, answer
                queries, and ensure smooth communication with your tutors at any
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
