import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import DetailPackages from "./Pages/DetailPackages";

import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galery from "./Pages/Galery";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />

      <Routes></Routes>

      <Packages />
      <Galery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
