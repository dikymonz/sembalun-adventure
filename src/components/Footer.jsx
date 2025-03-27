import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    const serviceID = "service_d309tw2";
    const templateID = "template_auxj0h9";
    const publicKey = "XsbsqCWfrVaTiqDEI";

    const templateParams = {
      user_email: email,
      user_name: "Subscriber", // Tambahkan nama jika diperlukan oleh template
      admin_email: "diky.monz03@gmail.com",
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Subscribed successfully! 🎉");
        setEmail(""); // Reset input setelah sukses
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error(`Failed to subscribe: ${error.text || error.message || "Unknown error"}`);
      });
  };

  // Validasi format email yang lebih ketat
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <footer className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Deskripsi */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Logo" className="w-60 h-auto" draggable="false" />
          <p className="text-gray-400 mt-4">
            Embark on an unforgettable adventure in Sembalun and uncover the natural wonders of Lombok.
          </p>
        </div>

        {/* Menu Navigasi */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li><a href="#Header" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About us</a></li>
            <li><a href="#Contacts" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Form Subscribe */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © Sembalun Adventure - Dikymonz. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
