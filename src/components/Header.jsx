import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const images = {
  morning: "/hero.jpg",    // 07:00 - 11:59
  afternoon: "/hero1.jpg", // 12:00 - 17:59
  evening: "/hero2.jpg",   // 18:00 - 23:59
  night: "/hero3.jpg"      // 00:00 - 06:59
};

// Fungsi untuk mendapatkan gambar sesuai jam sekarang
const getCurrentImage = () => {
  const hour = new Date().getHours(); // Menggunakan jam device
  if (hour >= 7 && hour < 12) return images.morning;
  if (hour >= 12 && hour < 18) return images.afternoon;
  if (hour >= 18 && hour < 24) return images.evening;
  return images.night; // 00:00 - 06:59
};

const Header = () => {
  const [currentImage, setCurrentImage] = useState(getCurrentImage());
  const [, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Update gambar & jam setiap 1 menit
    const interval = setInterval(() => {
      setCurrentImage(getCurrentImage());
      setCurrentTime(new Date().toLocaleTimeString()); // Update tampilan jam
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden transition-all duration-1000'
      style={{
        backgroundImage: `url(${currentImage})`,
        willChange: 'background-image',
        backfaceVisibility: 'hidden'
      }}
      id='Header'
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
        style={{ willChange: 'opacity, transform' }}
      >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Lombok Adventure Consultant
        </h2>
        <div className='space-x-6 mt-16'>
          <a href='#Packages' className='bg-blue-500 px-8 py-3 rounded'>
            Package
          </a>
          <a
            href='#Contacts'
            className='border border-white px-8 py-3 rounded hover:bg-blue-500 transition-all ease-in-out'
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
