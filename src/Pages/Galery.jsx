import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Galery = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  useEffect(() => {
    if (location.hash === "#Galeri") {
      const element = document.getElementById("Galeri");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const images = [
    assets.image1, assets.image2, assets.image3, assets.image4,
    assets.image5, assets.image6, assets.image7, assets.image8,
    assets.image9, assets.image10
  ];

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div id="Galeri" className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
      <h2 className="text-2xl sm:text-4xl font-bold mb-5 text-center">Galery</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {currentImages.map((img, index) => (
          <div key={index} className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg" src={img} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex mt-5 space-x-2">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1} 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50">
          Prev
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded">{currentPage} / {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Galery;
