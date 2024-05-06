"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrolToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleShow = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", toggleShow);

    return () => window.removeEventListener("scroll", toggleShow);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 animate-pulse right-4 flex justify-end">
      {showScroll && (
        <button
          className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
          onClick={scrollUp}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrolToTop;
