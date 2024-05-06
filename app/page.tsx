"use client";
import React, { useEffect } from "react";
import Home from "./components/Home/page";

import About from "./components/Home/About/About";
import Feature from "./components/Home/Feature/Feature";
import Price from "./components/Home/Price/Price";
import Advantage from "./components/Home/Advantage/Advantage";
import Investor from "./components/Home/Investor/Investor";
import Review from "./components/Home/Review/Review";
import Blog from "./components/Home/Blog/Blog";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);

  return (
    <div className="overflow-hidden">
      <Home />
      <About />
      <Feature />
      <Price />
      <Advantage />
      <Investor />
      <Review />
      <Blog />
    </div>
  );
};

export default HomePage;
