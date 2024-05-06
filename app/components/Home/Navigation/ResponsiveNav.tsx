"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeShowNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav nav={showNav} closeNav={closeShowNavHandler} />
    </div>
  );
};
export default ResponsiveNav;
