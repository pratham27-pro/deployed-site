import React from "react";
import { motion } from "framer-motion";
import {
    FaBullhorn,
    FaUsers,
    FaCheckCircle,
    FaChartLine,
    FaChalkboardTeacher,
    FaFlask,
    FaHome,
    FaMoneyCheckAlt,
} from "react-icons/fa";

const services = [
    {
        icon: <FaBullhorn />,
        title: "In-Store Promotions",
        description:
            "Our in-store promotions are crafted to increase visibility, drive immediate sales, and build brand loyalty. We combine creativity with data-driven strategy to execute impactful retail campaigns. From interactive displays to personalized customer experiences, our focus is to turn foot traffic into loyal customers through strategic engagement and memorable interactions.",
        image:
            "/inStorePromo.jpg",
    },
    {
        icon: <FaUsers />,
        title: "Consumer Activation",
        description:
            "We bring brands to life through high-energy consumer activations that create strong emotional connections. Our team conceptualizes and manages experiential marketing campaigns that leave a lasting impression. From digital-to-field executions, we ensure every engagement reflects your brand’s story, values, and promise with measurable impact.",
        image:
            "/consumerActivation.jpg",
    },
    {
        icon: <FaChartLine />,
        title: "Mystery Audits",
        description:
            "Gain accurate insights into your customer service quality and operational consistency through detailed mystery audits. Our specialists evaluate your brand from a consumer’s perspective, providing structured feedback and actionable improvement points. This helps businesses enhance customer satisfaction and maintain consistent brand standards.",
        image:
            "/mysteryAudits.jpg",
    },
    {
        icon: <FaCheckCircle />,
        title: "Merchandising",
        description:
            "Effective merchandising drives both visibility and conversion. We specialize in optimizing in-store displays, shelf arrangements, and promotional placements using real-time data. Our experts ensure that every product gets the attention it deserves—enhancing both consumer experience and brand recall at every touchpoint.",
        image:
            "/merchandising.jpg",
    },
    {
        icon: <FaChalkboardTeacher />,
        title: "Training",
        description:
            "Empower your workforce through structured and engaging training programs. From skill enhancement to leadership development, our sessions are tailored to your team’s needs. We combine industry knowledge with practical approaches to ensure measurable growth in performance and productivity.",
        image:
            "/training.jpg",
    },
    {
        icon: <FaFlask />,
        title: "Wet Sampling",
        description:
            "We provide precise and consistent wet sampling services for industries that rely on accuracy and compliance. Our experts handle every stage meticulously—collection, testing, and documentation—ensuring reliable results that align with your business and regulatory requirements.",
        image:
            "/wetSampling.jpg",
    },
    {
        icon: <FaHome />,
        title: "Home to Home",
        description:
            "Our home-to-home services redefine convenience with a personal touch. We manage end-to-end logistics, ensuring reliable and prompt services right at your doorstep. With a focus on customer comfort and efficiency, we make every delivery and visit a seamless experience.",
        image:
            "/hToh.jpg",
    },
    {
        icon: <FaMoneyCheckAlt />,
        title: "Payrolling",
        description:
            "Our comprehensive payroll services ensure accurate and compliant salary management. We handle payroll processing, tax filings, and employee benefits with absolute precision—allowing you to focus on business growth while we manage the complexities of your workforce payments.",
        image:
            "/payrolling.jpg",
    },
];

const ServiceSection = () => {
    return (
        <section
            id="services"
            className="bg-gradient-to-b from-black via-gray-900 to-red-950 text-white py-20 px-6 md:px-24"
        >
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 mt-10">
                    Our <span className="text-red-500">Services</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                    We combine creativity, strategy, and technology to deliver powerful business solutions
                    that drive performance, efficiency, and growth.
                </p>
            </div>

            {/* Services */}
            <div className="space-y-24">
                {services.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image Section */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full md:w-1/2"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-2xl shadow-lg border border-gray-700 object-cover w-full h-72 md:h-80"
                            />
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full md:w-1/2"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border-4 border-red-600 text-3xl text-red-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;
