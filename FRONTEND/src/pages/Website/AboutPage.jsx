import React from "react";
import Navbar from "../../components/CommonComponents/Navbar";
import AboutSection from "../../components/AboutPageComponents/AboutSection";
import OurNetwork from "../../components/AboutPageComponents/OurNetwork";
import Footer from "../../components/CommonComponents/Footer";

const About = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <AboutSection />
      <OurNetwork />
      <Footer />
    </div>
  );
};

export default About;
