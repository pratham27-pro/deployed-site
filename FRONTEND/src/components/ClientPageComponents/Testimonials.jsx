import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: "/testi2.jpg", 
    client: "ITC Limited",
    feedback:
      "From Team ITC for the resilience, agility, and passion shown by Concept Promotions. We highly appreciate your efforts and value our partnership.",
  },
  {
    id: 2,
    image: "/testi2.jpg", 
    client: "Hindustan Unilever",
    feedback:
      "Your dedication and creative execution have made a remarkable impact on our brand activations. We look forward to more successful collaborations.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-red-950 via-gray-900 to-black text-white py-5 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          What Our <span className="text-red-500">Clients Say</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          We take pride in building long-lasting partnerships. Here's what our clients have to say
          about their experience working with Concept Promotions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-red-600/30 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.client}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-full">
                <FaQuoteLeft size={20} />
              </div>
            </div>

            {/* Text Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-red-500 mb-2">{item.client}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                “{item.feedback}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
