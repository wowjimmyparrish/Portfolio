import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full min-h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text 4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          James Parrish
        </h1>
        <h2 className="text 4xl sm:text-7xl font-bold text-[#8892b0]">
          Full-Stack Software Engineer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack software engineer with a passion for creating
          efficient and effective code.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-2 my-2 flex items-center hover:border-[#8892b0] hover:text-[#8892b0]">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
