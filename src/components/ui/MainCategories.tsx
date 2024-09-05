import {
  FaGraduationCap,
  FaChartLine,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { LuGlobe2 } from "react-icons/lu";
import { MdEditDocument, MdSurfing } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";

const items = [
  { id: 1, title: "Tutoring & Academic Support", icon: <FaGraduationCap /> },
  { id: 2, title: "Language Learning", icon: <LuGlobe2 /> },
  { id: 3, title: "Career Coaching", icon: <FaChartLine /> },
  { id: 4, title: "Writing & Research Support", icon: <MdEditDocument /> },
  { id: 5, title: "STEM & Coding Lessons", icon: <FaLaptopCode /> },
  {
    id: 6,
    title: "Test Prep. & Study Resources",
    icon: <IoLibraryOutline />,
  },
  {
    id: 7,
    title: "Academic Consulting & Advising",
    icon: <FaChalkboardTeacher />,
  },
  { id: 8, title: "Arts & Creative Learning", icon: <MdSurfing /> },
];

const MainCategories = () => {
  return (
    <div className="relative z-20 mx-auto max-w-7xl text-center font2">
      {/* Grid for larger screens - show all items */}
      <div className="hidden lg:grid grid-cols-4 xl:grid-cols-8 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="hover:-translate-y-2 group bg-neutral-50 duration-500 flex text-black flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md "
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
            >
              <path
                transform="translate(100 100)"
                d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
              ></path>
            </svg>

            <div className="z-20 flex flex-col justify-center items-center">
              <span className="font-bold text-3xl ml-2">{item.icon}</span>
              <p className="font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid for smaller screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:hidden m-4">
        {items.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-full h-auto flex text-black flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md "
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
            >
              <path
                transform="translate(100 100)"
                d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
              ></path>
            </svg>

            <div className="z-20 flex flex-col justify-center items-center ">
              <span className="font-bold text-3xl ml-2 ">{item.icon}</span>
              <p className="font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCategories;
