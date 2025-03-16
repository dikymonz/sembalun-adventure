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
          <div className="relative">
        <img src={project.image1} alt={project.title} className="w-full h-auto mb-14 rounded" />

        {/* Tag pertama di pojok kanan atas */}
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {project.desk1}
        </div>

        {/* Tag kedua di bawah tag pertama */}
        <div className="absolute top-10 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
          {project.route}
        </div>
      </div>
            
            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
              <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded ">
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-500 text-sm">
                  <span className="font-bold">{project.desk}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

       {/* Modal */}
       {selectedPackage && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            {/* Tombol Close */}
            <section className='bg-white dark:bg-gray-900 text-center p-6 py-20 lg:px-32 w-full overflow-y-auto max-h-screen' id='detail'>
                
                        <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
                        <button
        onClick={() => setSelectedPackage(null)}
        className='absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center'
      >
        ✕
      </button>
                            <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                                <h2 className='text-left mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>{selectedPackage.title}</h2>
                                <p className='text-left'>{selectedPackage.desk} - {selectedPackage.route}</p>
                                <p className='text-left'>{selectedPackage.desk1}</p>
                                <div className='mt-2'>
                                <h2 class="text-left mb-2 text-lg font-semibold text-gray-900 dark:text-white">Includes:</h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center">
                    {selectedPackage.include1}
                </li>
                <li className="flex items-center">
                     {selectedPackage.include2}
                </li>
                <li className="flex items-center ">
                     {selectedPackage.include3}
                </li>
                <li className="flex items-center">
                     {selectedPackage.include4}
                </li>
                <li className="flex items-center">
                     {selectedPackage.include5}
                </li>
                <li className="flex items-center">
                     {selectedPackage.include6}
                </li>
                <li className="flex items-center">
                     {selectedPackage.include7}
                </li>
                <li className="flex items-center">
                     {selectedPackage.include8}
                </li>
            </ul>
            
            {/* table prices */}
            
            <div className='Tabel mt-5'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                {selectedPackage.title} package price list
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">For orders of more than 6 people, please contact us directly on WhatsApp.</p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                1 Person
                            </th>
                            <th scope="col" class="px-6 py-3">
                                2-3 Person
                            </th>
                            <th scope="col" class="px-6 py-3">
                                4-5 Person
                            </th>
                            <th scope="col" class="px-6 py-3">
                                6-7 Person
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td scope="row" class="px-6 py-4">
                                {selectedPackage.price1}
                            </td>
                            <td class="px-6 py-4">
                                {selectedPackage.price2}
                            </td>
                            <td class="px-6 py-4">
                                {selectedPackage.price3}
                            </td>
                            <td class="px-6 py-4">
                                {selectedPackage.price4}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-left'>
            <button
  type="button"
  onClick={() => {
    const phoneNumber = "6283129416643"; // Ganti dengan nomor WA tujuan
    const message = `  Halo, saya ingin memesan paket ${selectedPackage.title}.

    Harap tulis email anda : 

    Hapus paket yang tidak di perlukan!
    
    Detail Paket:
    - Paket untuk : ${selectedPackage.desk1}c
    - Rute: ${selectedPackage.route}
    - Deskripsi: ${selectedPackage.desk}
    - Harga:
     * 1 Orang: ${selectedPackage.price1}
     * 2-3 Orang: ${selectedPackage.price2}
     * 4-5 Orang: ${selectedPackage.price3}
     * 6-7 Orang: ${selectedPackage.price4}

    Silakan berikan detail lebih lanjut. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  }}
  className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  Booking Now
</button>

            </div>
            </div>
                            </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mt-8'>
                                <img className='w-full rounded-lg' src={selectedPackage.image1} alt="content1" />
                                <img className='mt-4 w-full lg:mt-10 rounded-lg' src={selectedPackage.image2} alt="content2" />
                            </div>
                        </div>
                    </section>
        </div>
      )}
    </motion.div>
  );
};

export default Packages;
