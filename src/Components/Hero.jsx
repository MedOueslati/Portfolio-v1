import React from "react";
import portfimg from "../assets/portfimg.jpeg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      {/* Image Section */}
      <div className=" my-auto mx-auto ">
        <div className=" mb-0w-[300px] h-auto lg:w-[400px] ">
          <img
            src={portfimg}
            alt="Portrait of the developer"
            className="rounded-md "
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 text-transparent bg-clip-text">
            I'm a
          </span>{" "}
          <br />
          <TypeAnimation
            sequence={["Frontend Dev", 1000, "Backend Dev", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Mohamed Oueslati. I have 2 years of experience in web
          development.
        </p>
        <div className="my-8">
          <a
            href="/MohamedOueslatii.pdf" // Link to the CV file in the public folder
            download // This attribute triggers a download
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 "
          >
            Download CV
            
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;