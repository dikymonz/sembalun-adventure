import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const hotPackages = [
  {
    image: '/hot1.jpg',
    title: 'Sembalun Adventure ATV Tour',
    description: 'Explore The Beauty of Land Sembalun..',
    price: 'Rp 450.000',
  },
  {
    image: '/hot2.jpg',
    title: 'Whale Shark Trip Lombok-Sumbawa',
    description: 'Daily sharing whale shark.',
    price: 'Rp 2.250.000/pax',
  },
  {
    image: '/hot3.jpg',
    title: 'Komodo island Trip',
    description: 'Let’s Swim With Whale Shark and Hunting Komodo Dragon.',
    price: 'Rp 4.200.000/pax',
  },
];

const Hot = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const whatsappText = encodeURIComponent(
    `Halo! Saya ingin memesan ${hotPackages[activeIndex].title} seharga ${hotPackages[activeIndex].price}.`
  );
  const whatsappLink = `https://wa.me/6287777335813?text=${whatsappText}`;

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-6 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Hot{" "}
        <span className="underline underline-offset-4 decoration-1 font-light text-center">
          Packages
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
      Hot Package is an affordable travel deal with exciting destinations.

      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl overflow-hidden w-full max-w-5xl shadow-md my-2">
        
        {/* Image Slider */}
        <div className="w-full h-64 md:h-auto flex items-center justify-center">
            
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-4/5 h-full"
          >
            {hotPackages.map((pkg, index) => (
              <SwiperSlide key={index}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  onClick={() => handleImageClick(pkg.image)}
                  className="object-contain w-full h-full cursor-zoom-in transition hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content */}
        
        <div className="flex flex-col justify-center p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">Hot Package</span>
            {hotPackages[activeIndex].title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-2">
            {hotPackages[activeIndex].description}
          </p>
          <p className="text-red-600 font-semibold text-lg md:text-xl mb-4">
            {hotPackages[activeIndex].price}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Booking Sekarang
          </a>
        </div>
      </div>

      {/* Modal Zoom Image */}
      {modalImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div
      className="relative p-2"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={modalImage}
        alt="Zoom"
        className="max-w-full max-h-[80vh] rounded shadow-lg"
      />
      <div className="text-right mt-4 w-full">
        <a
          href={modalImage}
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download Gambar
        </a>
      </div>
      <button
        className="absolute top-1 right-1 text-white bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-80"
        onClick={closeModal}
      >
        ✕
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Hot;
