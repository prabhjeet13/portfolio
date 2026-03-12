import React from "react";
import psg from "../images/psg.png"
function About() {
  return (
   <section
  id="about"
  className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-10"
>
  <div className="max-w-7xl w-full flex items-center justify-between gap-20">

    {/* LEFT CONTENT */}
    <div className="flex flex-col gap-6 max-w-3xl">

      <h2 className="text-5xl font-bold text-yellow-400">
        About Me
      </h2>

      <p className="text-lg leading-relaxed text-gray-300">
        I have done <span className="text-white font-semibold">Master of Computer Applications </span> 
        from Motilal Nehru National Institute of Technology Allahabad.
        I completed my <span className="text-white font-semibold">Bachelor of Computer Science (Honours) </span> 
        from Sri Guru Gobind Singh College of Commerce, University of Delhi.
      </p>

      <p className="text-lg leading-relaxed text-gray-300">
        I have experience in <span className="text-white font-semibold">Backend Development </span> 
        using Node.js, Express.js and MS-SQL Server. I have implemented RESTful APIs 
        with authentication middlewares and built stored procedures, join queries, 
        and bulk upload/update mechanisms in SQL Server.
      </p>

      <p className="text-lg leading-relaxed text-gray-300">
        Developed systems for gig partner onboarding, vendor management, and hiring 
        management to handle worker lifecycles and vacancies at scale. Implemented 
        cron-jobs for automated email campaign delivery and established 
        Role-Based Access Control (RBAC) to secure portal modules.
      </p>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-3 mt-2">

        <span className="px-4 py-2 bg-gray-800 rounded-lg">C</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">C++</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">JavaScript</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">Node.js</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">Express.js</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">TypeScript</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">REST APIs</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">JWT</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">MS SQL</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">MongoDB</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">React.js</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg">TailwindCSS</span>

      </div>

      {/* RESUME BUTTON */}
      <a
        href="https://drive.google.com/file/d/1mznYXxlDkwGJGBeAauJnnwaEjBifltRT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-4 w-fit px-7 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300">
          Download Resume
        </button>
      </a>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center items-center">
      <img
        src={psg}
        alt="Prabhjeet Singh"
        className="w-[380px] h-[70%] object-cover rounded-2xl shadow-2xl border-4 border-yellow-400 hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</section>
  );
}

export default About;