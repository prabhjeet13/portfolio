import React from "react";
import psg from "../images/psg.png"
function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-48 h-48 mb-6">
        <img
          src= {psg}
          alt="psg"
          className="w-full h-full rounded-md shadow-lg"
        />
      </div>
      <h2 className="text-4xl font-bold mb-4">I’m Prabhjeet Singh</h2>
      <p className="text-center text-xl px-4 md:px-8 max-w-2xl leading-relaxed">
        Passionate software developer with experience in MERN stack.
        I have worked on various projects such as Online Judge and Ed-tech and Medisphere platforms and many more to go.
        
      </p>
      <a href= "https://drive.google.com/file/d/158LTWaFWox8KRrEiXx3tajN4qbQng_Jg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="mt-6 bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-90 transition-all duration-300">
          Download Resume 
        </button>
      </a>
    </div>
  );
}

export default About;