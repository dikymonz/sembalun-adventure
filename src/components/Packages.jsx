// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { assets, projectsData } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "../css/style.css";

const Packages = () => {
  const scrollContainerRef = useRef(null);
  const cardRef = useRef(null); // Untuk mengukur lebar satu kartu
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const nextProject = () => {
    if (scrollContainerRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 32; // +32 = gap-8 (8 * 4)
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const prevProject = () => {
    if (scrollContainerRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 32;
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextProject,
    onSwipedRight: prevProject,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto pt-5 px-6 md:px-20 lg:px-32 my-5 w-full overflow-hidden"
      id="Packages"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Travel <span className="underline underline-offset-4 decoration-1 font-light">Package</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Explore the List of Lombok Tour Packages.
      </p>

      <div className="justify-start item-center mb-8">
        <form className="max-w-md mx-auto shadow-sm">
          <div className="relative">
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Packages, Destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => setSearchTerm("")}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-end items-center mb-8">
        <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2">
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject} className="p-3 bg-gray-200 rounded">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div {...handlers} ref={scrollContainerRef} className="flex gap-8 overflow-x-auto scroll-smooth scroll-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="relative flex-shrink-0 w-full sm:w-1/4 snap-start cursor-pointer"
              onClick={() => setSelectedPackage(project)}
            >
              <div className="relative">
                <img
                  src={project.image1}
                  alt={project.title}
                  className="w-full h-auto mb-14 rounded"
                  draggable="false"
                />
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {project.route}
                </div>
               
              </div>
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded">
                  <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800 truncate whitespace-nowrap">
  {project.title}
</h2>
                  <p className="text-gray-500 text-sm">
                    <span className="font-bold">{project.desk}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No packages found.</p>
        )}
      </div>

      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <section className="bg-white dark:bg-gray-900 p-6 py-20 lg:px-32 w-full overflow-y-auto max-h-screen" id="detail">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="text-left mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {selectedPackage.title}
                </h2>
                <p className="text-left">{selectedPackage.desk} {selectedPackage.route}</p>
                <p className="text-left font-bold">{selectedPackage.desk1}</p>

                <div className="mt-2">
                  <h2 className="text-left mb-2 text-lg font-semibold text-gray-900 dark:text-white">Includes:</h2>
                  {Array.from({ length: 20 }, (_, i) => (
                    <li key={i} className="flex items-center">
                      {selectedPackage[`include${i + 1}`]}
                    </li>
                  ))}

                  <div className="Tabel mt-5">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                          {selectedPackage.title} package price list
                          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                            For orders of more than 8 people, please contact us directly on WhatsApp.
                          </p>
                        </caption>
                        <thead>
                          <tr>
                            {Array.from({ length: 4 }, (_, i) => (
                              <th key={i} className="px-6 py-3 bg-gray-400 text-gray-900">
                                {selectedPackage[`person${i + 1}`]}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            {Array.from({ length: 4 }, (_, i) => (
                              <td key={i} className="px-6 py-4">
                                {selectedPackage[`price${i + 1}`]}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="text-left">
                      <button
                        type="button"
                        onClick={() => {
                          const phoneNumber = "6287777335813";
                          const message = `
Hello, I would like to book the ${selectedPackage.title} package.

Package Details:
- Package for: ${selectedPackage.desk1}
- Route: ${selectedPackage.route}
- Description: ${selectedPackage.desk}
- Price:
  * 1 Person: ${selectedPackage.price1}
  * 2-3 People: ${selectedPackage.price2}
  * 4-5 People: ${selectedPackage.price3}
  * 6-7 People: ${selectedPackage.price4}

Please provide further details. Thank you!`;
                          const encodedMessage = encodeURIComponent(message);
                          window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
                        }}
                        className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Booking Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src={selectedPackage.image1} alt="content1" draggable="false" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src={selectedPackage.image2} alt="content2" draggable="false" />
              </div>
            </div>
          </section>
        </div>
      )}
    </motion.div>
  );
};

export default Packages;
