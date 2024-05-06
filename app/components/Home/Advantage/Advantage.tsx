import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import advantageImg from "/public/images/advantage.png";
import Image from "next/image";
const Advantage = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* section heading */}
      <SectionHeading heading="Advantages" />
      {/* define grid system */}
      <div className="w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* text content */}
        <div>
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-white text-opacity-60 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil at
            nisi cumque expedita nesciunt atque, quod vero id.
          </p>
          <p className="text-white text-opacity-60 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. expedita
            nesciunt atque, quod vero id.
          </p>
        </div>
        {/* image content */}
        <div>
          <Image
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            src={advantageImg}
            alt="advantage"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
