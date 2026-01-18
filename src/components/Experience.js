import React from "react";

const Experience = () => {
  return (
    <div
      id="ExpSection"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
    >
      <h2 className="text-4xl font-bold text-center text-white uppercase tracking-wider mb-14">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
          {/* Company & Duration */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Software Developer (Backend)
            </h3>
            <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-4 py-1 rounded-full">
              Jan 2025 – Jan 2026
            </span>
          </div>

          <p className="text-lg font-semibold text-gray-700 mb-4">
            Isourse Technologies · New Delhi
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Backend Developer with 1 year of hands-on experience in building
            scalable enterprise applications using Node.js and MS SQL Server.
            Actively contributed to designing and developing secure RESTful APIs
            and complex database logic for business-critical systems.
          </p>

          {/* Responsibilities */}
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Key Responsibilities & Contributions
          </h4>

          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>
              Developed and maintained RESTful APIs using <strong>Node.js </strong>
              for multiple backend modules.
            </li>
            <li>
              Designed and optimized <strong>MS SQL Server</strong> databases,
              including stored procedures, joins, and performance-tuned queries.
            </li>
            <li>
              Implemented a <strong>Gig Partner Onboarding System</strong> to
              manage the complete worker lifecycle from onboarding to
              offboarding.
            </li>
            <li>
              Built a <strong>Hiring Management System</strong> enabling clients
              to manage locations, departments, designations, and vacancy
              allocations.
            </li>
            <li>
              Implemented vendor mapping functionality to associate contract
              vendors with hiring requirements.
            </li>
            <li>
              Designed and enforced <strong>Role-Based Access Control (RBAC)</strong>
              to define roles and permissions for office staff across modules.
            </li>
            <li>
              Collaborated closely with cross-functional teams to translate
              business requirements into scalable technical solutions.
            </li>
            <li>
              Followed best practices for API security, data validation, and
              modular backend architecture.
            </li>
          </ul>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Node.js",
              "Express.js",
              "MS SQL Server",
              "REST APIs",
              "Stored Procedures",
              "RBAC",
              "Backend Architecture",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
