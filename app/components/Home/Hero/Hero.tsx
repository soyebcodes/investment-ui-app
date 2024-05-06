import React from "react";
import Image from "next/image";
import heroImg from "/public/images/hero.png";

const Hero = () => {
  return (
    <div className="lg:h-[88vh] bg-[#62269d] sm:h-[75vh] md:h-[80vh] h-[70vh] flex items-center justify-center flex-col">
      {/* define grid for hero */}
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto">
        {/* text content */}
        <div className="col-span-2">
          <h1
            data-aos="fade-right"
            className="text-[27px] md:text-[35px] lg:text-[45px] mb-4 font-bold text-white leading-[2.4rem] md:leading-[4rem]"
          >
            100% Secure <span className="text-yellow-300">Investment</span> Plan
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:text-[17px] text-[15px] mb-8 text-white opacity-90 font-normal"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            dolore itaque rem perspiciatis sit ipsum voluptas laborum nemo
            soluta reprehenderit.
          </p>
          {/* input box */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-full h-14 relative rounded-full bg-blue-950"
          >
            <input
              type="text"
              placeholder="Enter Email"
              className="bg-transparent w-full ml-8 h-full px-4 text-white focus:outline-none"
            />
          </div>
          {/* button */}
          <button
            data-aos="zoom-out"
            data-aos-delay="600"
            className="px-4 py-2 bg-blue-500 hover:bg-indigo-700 outline-none w-[40%] rounded-full text-white transition-all duration-50 mt-4"
          >
            Submit
          </button>
        </div>
        {/* image */}
        <div
          data-aos="fade-left"
          data-aos-delay="800"
          className="col-span-3 hidden sm:block mx-auto"
        >
          <Image src={heroImg} alt="hero image" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
