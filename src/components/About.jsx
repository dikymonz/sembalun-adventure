import React from "react";
import { assets } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BsInstagram, BsMap, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Let's Connect With Us!
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max:w-lg "
          draggable="false"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <BsWhatsapp />
              </p>
              <p className="">+62 877-7733-5813</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <BsTiktok />
              </p>
              <p className="">Sembalun Adventure</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <BsInstagram />
              </p>
              <p className="">Sembalun Adventure</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <MdEmail />
              </p>
              <p className="">bagasventure@gmail.com</p>
            </div>
          </div>
          <p className="my-10 max-w-lg ">
          Sembalun Adventure is a local tour operator specializing in outdoor adventures and cultural experiences in Sembalun, Lombok. We offer guided trekking tours to Mount Rinjani, nature excursions, and village tours to showcase the beauty and traditions of the region. Our experienced team is dedicated to providing safe, memorable, and authentic adventures for nature lovers and travelers seeking to explore Lombok’s stunning landscapes. Whether you're hiking to the Rinjani summit or exploring Sembalun’s rich culture, we ensure an unforgettable journey.
          </p>
          <div className="gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <BsMap />
              </p>
              <p className="">Sembalun, Lombok, Indonesia</p>
            </div>
            
          </div>
          <button
            className="bg-gray-400 mt-2 px-8 py-3 text-gray-900 opacity-80 hover:opacity-100 transition-all ease-in-out duration-300 rounded-full"
            onClick={() =>
              window.open(
                "https://www.instagram.com/sembalun_adventure/",
                "_blank"
              )
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
