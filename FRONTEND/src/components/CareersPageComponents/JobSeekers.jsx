import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCity,
  FaBriefcase,
  FaUpload,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const JobSeekers = () => {
  const [selectedJob, setSelectedJob] = useState("");
  const [fileName, setFileName] = useState("Upload your CV");
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSelected(true);
    } else {
      setFileName("Upload your CV");
      setFileSelected(false);
    }
  };

  const handleRemoveFile = () => {
    setFileName("Upload your CV");
    setFileSelected(false);
    document.getElementById("cv-upload").value = "";
  };

  return (
    <section className="relative bg-gradient-to-t from-black via-gray-900 to-red-950 text-white px-6 pb-10 overflow-hidden">
      <div className="relative max-w-xl mx-auto bg-gray-900/80 border border-red-700/40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center mb-2">
          Job <span className="text-red-500">Seekers</span>
        </h2>
        <p className="text-gray-300 text-center mb-6 text-sm">
          Fill in your details below and apply for exciting opportunities with us.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center gap-3">
            <label className="w-28 text-xs font-semibold text-gray-300">
              Full Name:
            </label>
            <div className="relative flex-1">
              <FaUser className="absolute left-3 top-2.5 text-gray-400 text-xs" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-8 pr-3 py-2 rounded-md bg-gray-800 text-white text-xs border border-gray-700 focus:ring-1 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <label className="w-28 text-xs font-semibold text-gray-300">
              Phone:
            </label>
            <div className="relative flex-1">
              <FaPhoneAlt className="absolute left-3 top-2.5 text-gray-400 text-xs" />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full pl-8 pr-3 py-2 rounded-md bg-gray-800 text-white text-xs border border-gray-700 focus:ring-1 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <label className="w-28 text-xs font-semibold text-gray-300">
              Email:
            </label>
            <div className="relative flex-1">
              <FaEnvelope className="absolute left-3 top-2.5 text-gray-400 text-xs" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-8 pr-3 py-2 rounded-md bg-gray-800 text-white text-xs border border-gray-700 focus:ring-1 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          {/* City */}
          <div className="flex items-center gap-3">
            <label className="w-28 text-xs font-semibold text-gray-300">
              City:
            </label>
            <div className="relative flex-1">
              <FaCity className="absolute left-3 top-2.5 text-gray-400 text-xs" />
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full pl-8 pr-3 py-2 rounded-md bg-gray-800 text-white text-xs border border-gray-700 focus:ring-1 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          {/* Job Role */}
          <div className="flex items-center gap-3">
            <label className="w-28 text-xs font-semibold text-gray-300">
              Job Role:
            </label>
            <div className="relative flex-1">
              <FaBriefcase className="absolute left-3 top-2.5 text-gray-400 text-xs" />
              <input
                type="text"
                placeholder="Enter job role you are applying for"
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-md bg-gray-800 text-white text-xs border border-gray-700 focus:ring-1 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          {/* Upload CV */}
          <div className="flex items-start gap-3">
            <label className="w-28 text-xs font-semibold text-gray-300 mt-2">
              Upload CV:
            </label>
            <div className="flex-1">
              <div className="relative border-2 border-dashed border-red-600 rounded-md p-2 hover:border-red-400 transition-all cursor-pointer text-center">
                {!fileSelected ? (
                  <>
                    <input
                      type="file"
                      id="cv-upload"
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-white text-xs font-medium"
                    >
                      <FaUpload className="text-red-500" />
                      {fileName}
                    </label>
                  </>
                ) : (
                  <div className="flex items-center justify-between text-xs px-2 text-gray-200">
                    <span className="truncate">{fileName}</span>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="text-red-400 hover:text-red-600 transition-colors flex items-center gap-1"
                    >
                      <FaTimes size={10} />
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* File note line */}
              <p className="mt-1 text-[10px] text-gray-400 text-left">
                <span className="text-red-500">*</span> Accepted formats: JPG, JPEG, PNG, PDF, DOC (Max size: 1MB)
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-red-700 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-semibold py-2 rounded-md transition-all shadow-md text-xs"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default JobSeekers;
