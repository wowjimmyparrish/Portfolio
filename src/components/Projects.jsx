import React from "react";
import BjjHubPic from "../assets/bjjhubpic.png";
import WorkoutNow from "../assets/workoutnow.png";
import PicturePundit from "../assets/picturepundit.png";
function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300">
            Projects
          </p>
          <p className="py-4">// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid-Item */}
          <div
            style={{ backgroundImage: `url(${PicturePundit})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center ">
              <span className="text-2xl font bold text-white tracking-wider">
                {" "}
                Picture Pundit (React/Rails)
              </span>
              <div className="pt-8 text-center ">
                <a href="https://picture-pundit-app.onrender.com">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Site
                  </button>
                </a>
                <a href="https://github.com/wowjimmyparrish/picture-pundit-app.git">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BjjHubPic})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center ">
              <span className="text-2xl font bold text-white tracking-wider">
                {" "}
                BJJHub (React/Rails)
              </span>
              <div className="pt-8 text-center ">
                <a href="https://bjjhub-app.onrender.com">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Site
                  </button>
                </a>
                <a href="https://github.com/wowjimmyparrish/bjjhub.git">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkoutNow})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center ">
              <span className="text-2xl  font bold text-white tracking-wider ">
                {" "}
                WorkoutNow (React/Rails)
              </span>
              <div className="pt-8 text-center ">
                <a href="https://workoutnow-app.onrender.com">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Site
                  </button>
                </a>
                <a href="https://github.com/wowjimmyparrish/workoutnow.git">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
