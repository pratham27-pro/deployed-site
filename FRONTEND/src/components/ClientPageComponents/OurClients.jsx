import React from "react";

const clients = [
  { name: "ITC", logo: "/logos/ITC.png" },
  { name: "HUL", logo: "/logos/HUL.webp" },
  { name: "Henkel Swaskoff", logo: "/logos/Henkel.png" },
  { name: "Heritage Foods", logo: "/logos/Heritage.png" },
  { name: "Vibhor Oil", logo: "/logos/Vibhor.png" },
  { name: "Rajdhani", logo: "/logos/Rajdhani.png" },
  { name: "Coca Cola", logo: "/logos/CocaCola.jpg" },
  { name: "Glenmark Pharma", logo: "/logos/Glenmark.jpg" },
  { name: "Mangaldeep Agarbatti", logo: "/logos/Mangaldeep.jpg" },
  { name: "Pidilite", logo: "/logos/Pidilite.jpeg" },
  { name: "Raymond", logo: "/logos/Raymond.webp" },
  { name: "Tea Valley", logo: "/logos/TeaValley.png" },
];

const OurClients = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[70vh] mt-20 overflow-hidden">
      {/* Left Section */}
      <div className="bg-gradient-to-b from-[#E4002B] to-black text-white md:w-[35%] w-full py-16 px-8 flex flex-col justify-center items-center md:items-start text-center md:text-left relative">
        <div className="relative -translate-y-6"> {/* slightly moves content up */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Our <span className="text-white">Clients</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base max-w-xs">
            Trusted by top brands across industries — building partnerships that grow with excellence.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gradient-to-b from-black via-gray-900 to-black flex justify-center items-center py-14 px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative flex justify-center items-center bg-gray-900 border border-gray-800 rounded-xl shadow-md hover:shadow-[0_0_15px_rgba(228,0,43,0.3)] hover:border-red-600 transition-all duration-300 p-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 md:max-h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-red-600/0 group-hover:bg-red-600/5 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
