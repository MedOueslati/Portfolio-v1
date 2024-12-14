import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div
      className="border border-white-600 bg-gray-900 text-gray-400 max-w-[1200px] mx-auto p-6 rounded-md shadow-lg"
    >
      <h2 className="primary-color text-2xl md:text-4xl font-bold mb-6 text-center">
        Technical Skills and Interests
      </h2>

      {/* Skills List */}
      <div className="text-sm md:text-base text-gray-500 mb-6 md:mb-8">
        <ul className="space-y-2 md:space-y-4">
          <li><strong>Languages:</strong> Front-End: HTML / CSS / JavaScript</li>
          <li><strong>Frameworks and Libraries:</strong> React</li>
          <li><strong>API Consumption:</strong> Axios or Fetch API – For making HTTP calls to back-end services</li>
          <li><strong>Back-End:</strong> JavaScript with Node.js</li>
          <li><strong>Web Frameworks:</strong> Express.js</li>
          <li><strong>Databases:</strong> NoSQL MongoDB</li>
          <li><strong>Authentication and Security:</strong> JWT (JSON Web Tokens) / Bcrypt (password hashing)</li>
          <li><strong>RESTful APIs:</strong> For communication between the front-end and back-end</li>
          <li><strong>Development Tools:</strong> Postman / Git / Visual Studio Code</li>
        </ul>
      </div>

      {/* Skill Icons */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">
        {/* HTML Skill */}
        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:opacity-100 opacity-80">
          <img src={html} alt="HTML" className="w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ease-in-out" />
        </div>

        {/* CSS Skill */}
        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:opacity-100 opacity-80">
          <img src={css} alt="CSS" className="w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ease-in-out" />
        </div>

        {/* JavaScript Skill */}
        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:opacity-100 opacity-80">
          <img src={javascript} alt="JavaScript" className="w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ease-in-out" />
        </div>

        {/* React Skill */}
        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:opacity-100 opacity-80">
          <img src={react} alt="React" className="w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ease-in-out" />
        </div>

        {/* Tailwind Skill */}
        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:opacity-100 opacity-80">
          <img src={tailwind} alt="Tailwind" className="w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
