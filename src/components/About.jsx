import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm James. Nice to meet you.</p>
          </div>
          <div>
            <p>
              Hello! I'm a full-stack software engineer with a background in the
              medical field. With over over 12 years of experience as a Licensed
              Practical Nurse (LPN), I bring a diverse skill set and a deep
              understanding of healthcare to my work in software development. My
              transition from the medical field to coding was driven by my
              passion for solving problems that can have a positive impact on
              people's lives. I have developed a solid foundation in both
              front-end and back-end technologies, enabling me to create
              comprehensive and user-friendly software solutions. I enjoy
              working on complex problems and finding innovative ways to
              optimize performance and user experience. When I'm not immersed in
              coding, I like to challenge myself physically. Lifting weights and
              practicing Brazilian Jiu-Jitsu provides me with an outlet for
              maintaining a healthy and active lifestyle. Alongside my personal
              interests, spending quality time with my wife and our beloved dogs
              brings me immense joy and balance. Combining my technical
              knowledge, healthcare background, and enthusiasm for creating
              efficient code, I strive to make a meaningful contribution to the
              software development industry. I'm always eager to expand my
              knowledge and collaborate with like-minded professionals, as I
              believe continuous learning is vital for personal and professional
              growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
