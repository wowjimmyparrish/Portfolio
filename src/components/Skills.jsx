import React from "react";
import { FaCss3, FaJs, FaReact, FaHtml5 } from "react-icons/fa";
import { SiRubyonrails, SiRuby } from "react-icons/si";
function Skills() {
  return (
    <div
      name="skills"
      className="w-full h-screen text-center sm:text-left bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies I'm experienced in
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <FaCss3 size={80} className="mx-auto text-gray-300" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <FaHtml5 size={80} className="mx-auto text-gray-300" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <FaJs size={80} className="mx-auto text-gray-300" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <FaReact size={80} className="mx-auto text-gray-300" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <SiRubyonrails size={80} className="mx-auto text-gray-300" />
            <p className="my-4">RUBY ON RAILS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <SiRuby size={80} className="mx-auto text-gray-300" />
            <p className="my-4">RUBY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
