import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import networkImg from "/map.png";

const stats = [
  { value: 16, suffix: "+", label: "States • All 4 Metros" },
  { value: 42, suffix: "+", label: "Cities Covered" },
  { value: 1000, suffix: "+", label: "Promoters & Merchandisers" },
  { value: 500, suffix: "+", label: "Sales Men" },
];

const OurNetwork = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-red-950 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Our <span className="text-red-500">Network</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Expanding across India with a strong, dedicated workforce and a presence that
            delivers excellence across regions.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left: Map Image */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <img
              src={networkImg}
              alt="Our Network"
              className="w-full max-w-md md:max-w-lg object-contain h-[320px] md:h-[480px] drop-shadow-[0_0_25px_rgba(228,0,43,0.3)]"
            />
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-black rounded-2xl border border-red-600/30 p-6 text-center shadow-[0_0_20px_rgba(228,0,43,0.2)] hover:shadow-[0_0_35px_rgba(228,0,43,0.4)] transition-all duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold text-red-500">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                    enableScrollSpy
                  >
                    {({ countUpRef }) => (
                      <span ref={countUpRef}></span>
                    )}
                  </CountUp>
                </h3>
                <p className="mt-2 text-gray-200 font-semibold text-sm md:text-base">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;
