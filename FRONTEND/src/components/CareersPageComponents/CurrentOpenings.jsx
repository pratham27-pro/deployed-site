import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";

const jobOpenings = [
  {
    title: "Software Engineer",
    department: "Technology",
    location: "Nehru Place, Delhi",
    description:
      "Design, develop, and maintain web applications using modern technologies. Collaborate with cross-functional teams to deliver high-quality, scalable software solutions.",
  },
  {
    title: "Accounts Assistant",
    department: "Finance",
    location: "Nehru Place, Delhi",
    description:
      "Assist in maintaining company accounts, preparing reports, and coordinating with auditors and vendors.",
  },
  {
    title: "App Developer",
    department: "Technology",
    location: "Nehru Place, Delhi",
    description:
      "Develop and maintain high-performance mobile applications for Android and iOS. Collaborate with UI/UX designers and backend teams to create seamless, user-friendly app experiences using modern frameworks and tools.",
  },
];

const CurrentOpenings = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-red-950 text-white py-20 px-6 md:px-16 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Current <span className="text-red-500">Openings</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Join our growing team of professionals dedicated to excellence, innovation, and service.
          Explore our current opportunities and take the next step in your career.
        </p>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white/10 border border-red-700/30 hover:border-red-500 transition-all duration-300 rounded-2xl p-6 text-left hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-red-500 mb-2">
                {job.title}
              </h3>
              <div className="flex items-center text-gray-400 text-sm mb-4 gap-4">
                <span className="flex items-center gap-1">
                  <FaBriefcase /> {job.department}
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt /> {job.location}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-6">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
