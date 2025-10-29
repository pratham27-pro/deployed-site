import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-16 bg-gradient-to-b from-black to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-sm text-center md:text-left">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Concept<span className="text-red-600">Promotions</span>
          </h2>

          <ul className="flex justify-center md:justify-start flex-wrap gap-3 text-gray-400">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li>|</li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li>|</li>
            <li><a href="/services" className="hover:text-red-500 transition">Services</a></li>
            <li>|</li>
            <li><a href="/careers" className="hover:text-red-500 transition">Careers</a></li>
            <li>|</li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>

          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Concept Promotions & Events
          </p>
        </div>

        {/* Middle Section */}
        <div className="space-y-4">
          <div className="flex justify-center md:justify-start items-start space-x-3">
            <FaMapMarkerAlt className="text-red-600 mt-1" />
            <p>
              WC-5, Bakshi House, <br />
              Nehru Place, New Delhi - 110019
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <FaPhoneAlt className="text-red-600" />
            <p>+91 9718779049</p>
          </div>
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <FaEnvelope className="text-red-600" />
            <a
              href="mailto:manager@conceptpromotions.in"
              className="hover:text-red-400 transition"
            >
              manager@conceptpromotions.in
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white text-base">
            About the company
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            xxxxxxxxx Space Left for About the company. xxxxxxxxx
          </p>

          <div className="flex justify-center md:justify-start space-x-4 pt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
