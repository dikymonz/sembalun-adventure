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

    // EmailJS Configuration
    const serviceID = "service_d309tw2";
    const templateSubscribeID = "template_auxj0h9"; // Template untuk admin
    const templateAutoReplyID = "template_upbw3ms"; // Template auto-reply ke user
    const publicKey = "XsbsqCWfrVaTiqDEI";

    const templateParams = {
      title: "Sembalun Adventure",
      user_email: email, // Penerima auto-reply
      user_name: email, // Bisa diubah dengan input nama jika ada
      admin_email: "bagasventure@gmail.com",
      reply_to: email, // Untuk memastikan auto-reply terkirim ke user
    };

    console.log("Sending subscription email with params:", templateParams);

    // Kirim email notifikasi ke admin
    emailjs
      .send(serviceID, templateSubscribeID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS! Email to admin:", response.status, response.text);
        toast.success("Subscribed successfully! 🎉");

        // Kirim auto-reply ke user
        emailjs
          .send(serviceID, templateAutoReplyID, templateParams, publicKey)
          .then((response) => {
            console.log("Auto-reply sent!", response.status, response.text);
            toast.success("Auto-reply sent to your email! 📩");
          })
          .catch((error) => {
            console.error("Auto-reply failed...", error);
            toast.error(`Auto-reply failed: ${error.text || error.message || "Unknown error"}`);
          });

        setEmail(""); // Reset input setelah sukses
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error(`Failed to subscribe: ${error.text || error.message || "Unknown error"}`);
      });
  };

  // Validasi format email
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
  Copyright 2025 © Sembalun Adventure -{' '}
  <a
    href="https://instagram.com/dikymonz03"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-600 transition"
  >
    Dikymonz
  </a>. All Rights Reserved.
</div>

    </footer>
  );
};

export default Footer;
