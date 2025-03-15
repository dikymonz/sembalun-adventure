// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import { assets, projectsData } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "../css/style.css"; 



const Packages = () => {
  const scrollContainerRef = useRef(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Fungsi untuk geser ke kiri
  const prevProject = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Fungsi untuk geser ke kanan
  const nextProject = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Fungsi swipe gesture
  const handlers = useSwipeable({
    onSwipedLeft: nextProject,
    onSwipedRight: prevProject,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Packages"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Travel{" "}
        <span className="underline underline-offset-4 decoration-1 font-light text-center">
          Package
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Explore the List of Lombok Tour Packages.
      </p>

      {/* Tombol Navigasi */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Projects"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
          aria-label="Next Projects"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Scroll Container dengan Swipe Gesture */}
      <div
        {...handlers}
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto scroll-smooth scroll-container"
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full sm:w-1/4 snap-start"
            onClick={() => setSelectedPackage(project)}
          >
            <img src={project.image1} alt={project.title} className="w-full h-auto mb-14" />
            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
              <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded ">
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-500 text-sm">
                  {project.desk} <span className="font-bold">{project.desk1}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <section
            className="bg-white dark:bg-gray-900 text-center p-6 py-20 lg:px-32 w-full overflow-y-auto max-h-screen"
            id="detail"
          >
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="text-left mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {selectedPackage.title}
                </h2>
                <p className="text-left">{selectedPackage.desk} - {selectedPackage.route}</p>
                <p className="text-left">{selectedPackage.desk1}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src={selectedPackage.image1} alt="content1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src={selectedPackage.image2} alt="content2" />
              </div>
            </div>
          </section>
        </div>
      )}
    </motion.div>
  );
};

export default Packages;
