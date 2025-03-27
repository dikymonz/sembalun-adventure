import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Galery = () => {
  const images = [
    assets.image1, assets.image2, assets.image3, assets.image4,
    assets.image5, assets.image6, assets.image7, assets.image8,
    assets.image9, assets.image10, assets.image11, assets.image12, assets.image13,
    assets.image14
  ];

  return (
    <div
      id="Galeri"
      className="flex flex-col items-center justify-center container mx-auto p-6 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-5 text-center">Galery</h2>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Immortalize your moment with Sembalun Adventure
      </p>

     {/* Baris pertama - Animasi ke kiri */}
<div className="relative w-full overflow-hidden mb-4">
  <motion.div
    className="flex space-x-4 w-max flex-nowrap"
    animate={{ x: ["0%", "-50%"] }} 
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      duration: 60
    }}
  >
    {[...images, ...images].map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Gallery Image ${index + 1}`}
        className="h-auto rounded-lg shadow-lg 
                  w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[12vw]"
      />
    ))}
  </motion.div>
</div>


      {/* Baris kedua - Animasi ke kanan */}
<div className="relative w-full overflow-hidden mb-4">
  <motion.div
    className="flex space-x-4 w-max flex-nowrap"
    animate={{ x: ["-50%", "0%"] }} // Ubah arah animasi ke kanan
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      duration: 60
    }}
  >
    {[...images, ...images].map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Gallery Image ${index + 1}`}
        className="h-auto rounded-lg shadow-lg 
                  w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[12vw]"
      />
    ))}
  </motion.div>
</div>

    </div>
  );
};

export default Galery;
