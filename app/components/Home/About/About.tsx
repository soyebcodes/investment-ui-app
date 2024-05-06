import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { BsCheck2Square } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { GiSecurityGate } from "react-icons/gi";
import aboutImg from "/public/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* section heading */}
      <SectionHeading heading="About Us" />
      {/* define grid system */}
      <div className="w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* text content */}
        <div>
          <h1 className="text-[18px] md:text-[23px] text-white font-semibold">
            A faster way to invest in your future
          </h1>
          <p className="text-white text-opacity-60 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            quo omnis pariatur facere sit ducimus cumque consectetur nobis
            temporibus porro!
          </p>
          {/* list icon */}
          <div className="flex mt-8 items-center space-x-4">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-pink-700 flex items-center flex-col justify-center">
              <BsCheck2Square className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/* icon text content */}
            <div>
              <h1 className="text-[16px] md:text-[22px] text-white font-semibold">
                Licensed & Certified
              </h1>
              <p className="mt-1 text-[15px] text-white text-opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.
              </p>
            </div>
          </div>
          {/* list icon */}
          <div className="flex mt-8 items-center space-x-4">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-indigo-700 flex items-center flex-col justify-center">
              <BiMoney className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/* icon text content */}
            <div>
              <h1 className="text-[16px] md:text-[22px] text-white font-semibold">
                Savings & Investment
              </h1>
              <p className="mt-1 text-[15px] text-white text-opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.
              </p>
            </div>
          </div>
          {/* list icon */}
          <div className="flex mt-8 items-center space-x-4">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center flex-col justify-center">
              <GiSecurityGate className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/* icon text content */}
            <div>
              <h1 className="text-[16px] md:text-[22px] text-white font-semibold">
                100% Secured Investment
              </h1>
              <p className="mt-1 text-[15px] text-white text-opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div>
          <Image
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            src={aboutImg}
            alt="about image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
