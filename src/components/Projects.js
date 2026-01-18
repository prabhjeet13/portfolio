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
        "Patient and doctor profiles with secure login and management",
        "Appointment booking system with reminders and scheduling",
        "Real-time chat for consultations with doctors",
        "E-prescription and health record management system",
        "Appointment tracking and notifications for patients",
        "Using REACT_REDUX for state-management globally",
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
  <h2 className="text-4xl font-bold text-center mb-14 text-white uppercase tracking-widest">
    Projects
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    {projects.map((project, index) => (
      <div
        key={index}
        className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white capitalize">
            {project.name}
          </h3>
          <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
            Project
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-white/90 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack KPI */}
        <div className="bg-white/15 rounded-xl p-3 mb-4">
          <p className="text-xs text-white/70 uppercase tracking-wide">
            Tech Stack
          </p>
          <p className="text-sm font-semibold text-white">
            {project.techStack}
          </p>
        </div>

        {/* Role KPI */}
        <div className="bg-white/15 rounded-xl p-3 mb-5">
          <p className="text-xs text-white/70 uppercase tracking-wide">
            Role
          </p>
          <p className="text-sm font-semibold text-white">
            {project.role}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex justify-between items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-sm font-medium hover:text-gray-200 transition"
          >
            <FaGithub size={18} />
            Code
          </a>

          <a
            href={project.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
          >
            <FaLink size={16} />
            Live
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;
