import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; // Import icons from react-icons

const Projects = () => {
  const projects = [
    {
      name: "Medisphere",
      description:
        "A healthcare platform connecting patients with doctors for online consultations and health management, allowing easy access to healthcare services.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/medisphere",
      deployLink: "https://medisphere-rho.vercel.app/",
      features: [
         'Developed a healthcare management system that enables interaction between patients and doctors.',
         'Built the backend server using Node.js and Express.js, with flexible routing and middleware support.',
         'Designed an interactive user interface using React.js and Tailwind CSS with a component-based structure.',
         'Used MongoDB to store patient records, doctor information, and chats.',
         'Implemented authentication and authorization using email OTP, JWT tokens, and route-level middleware.',
         'Developed an appointment booking system for patients to schedule consultations with doctors.',
         'Added a real-time chat feature using WebSockets, enabling communication through an event-driven backend.'
      ],
    },
    {
      name: "KnowledgeStream",
      description:
        "An ed-tech platform for students and instructors to upload and access courses, facilitating seamless learning and teaching.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/studySingh",
      deployLink: "https://github.com/prabhjeet13/studySingh",
      features: [
        "Course uploads with Cloudinary integration for multimedia content",
        "User authentication and management with JWT",
        "Interactive UI for students and instructors with real-time updates",
        "Admin panel for managing courses, users, and content",
        "Real-time notifications for course updates and events",
        "Using REACT_REDUX for state-management globally",
      ]
    },
    {
      name: "@eatSleepCode",
      description:
        "An online judge platform that allows users to practice coding problems, execute their code in various languages, and receive feedback.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/eatsleepcode",
      deployLink: "https://eatsleepcode.vercel.app/",
      features: [
        "Code execution in multiple languages",
        "User authentication and authorization with session management",
        "Test case generation and automated verdict for code submissions",
        "Real-time feedback on code performance and accuracy",
        "Problem-solving leaderboard and user statistics",
        "Using REACT_REDUX for state-management globally",
      ]
    },
    {
      name: "User Management App",
      description:
        "A comprehensive platform to manage users with features such as secure authentication, role-based access control, and user activity tracking.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/user_management_app",
      deployLink: "https://user-management-app-eight-pi.vercel.app/",
      features: [
        "Add new User",
        "Edit User Details",
        "Delete a User",
        "Using React-Flow for displaying users beautifully",
        "Using REACT_REDUX for state-management globally",
      ]
    },
  ];

  return (
  <div
  id="projects"
  className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"
>
  <h2 className="text-4xl font-bold text-center mb-16 text-white uppercase tracking-widest">
    Projects
  </h2>

  <div className="max-w-5xl mx-auto flex flex-col gap-10 px-6">
    {projects.map((project, index) => (
  <div
  key={index}
  className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300"
>
  <div className="flex flex-col md:flex-row gap-10">

    {/* LEFT SIDE INFO */}
    <div className="flex-1">

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white">
          {project.name}
        </h3>

        <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
          Project
        </span>
      </div>

      <p className="text-white/90 mb-5 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-8 mb-5">

        <div>
          <p className="text-xs text-white/70 uppercase">
            Tech Stack
          </p>
          <p className="text-sm font-semibold text-white">
            {project.techStack}
          </p>
        </div>

        <div>
          <p className="text-xs text-white/70 uppercase">
            Role
          </p>
          <p className="text-sm font-semibold text-white">
            {project.role}
          </p>
        </div>

      </div>

      {/* LINKS */}
      <div className="flex gap-6">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white font-medium hover:text-gray-200"
        >
          <FaGithub size={18} />
          Code
        </a>

        <a
          href={project.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
        >
          <FaLink size={16} />
          Live
        </a>
      </div>

    </div>

    {/* RIGHT SIDE FEATURES */}
    <div className="flex-1 bg-black/30 rounded-xl p-5">

      <h4 className="text-lg font-semibold text-white mb-3">
        Key Features
      </h4>

      <ul className="text-gray-200 space-y-2 text-sm">
        {project.features.map((feature, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

    </div>

  </div>
</div>
    ))}
  </div>
</div>

  );
};

export default Projects;
