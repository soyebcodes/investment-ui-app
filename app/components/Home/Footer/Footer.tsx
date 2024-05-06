import React from "react";

const Footer = () => {
  return (
    <div className="pt-12 bg-[#5306e0] pb-12 ">
      {/* define grid system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {/* footer section */}
        <div className="lg:mx-auto mx-0">
          {/* logo */}
          <h1 className="text-[16px] md:[25px] font-bold text-white">
            <span className="text-[27px] md:text-[35px] text-yellow-300">
              IN
            </span>
            Vestor
          </h1>
          <p className="text-white text-opacity-60 mt-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="mt-4 text-white">support @ 2022</p>{" "}
          <p className="text-red-400 text-xl font-bold mt-2">+123456789</p>
        </div>
        {/* footer section 2 */}

        <div className="lg:mx-auto mx-0">
          <h1 className="text-[16px] md:[25px] font-semibold text-white mb-6">
            Company
          </h1>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            About
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Affiliate
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Career
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Culture
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Blog
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Press
          </p>
        </div>
        <div className="lg:mx-auto mx-0">
          <h1 className="text-[16px] md:[25px] font-semibold text-white mb-6">
            Information
          </h1>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Return policy
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Privacy policy
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Terms and conditions
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Sitemap
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            FAQ
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Blog
          </p>
        </div>
        <div className="lg:mx-auto mx-0">
          <h1 className="text-[16px] md:[25px] font-semibold text-white mb-6">
            About us
          </h1>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Return policy
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Privacy policy
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Terms and conditions
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Sitemap
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            FAQ
          </p>
          <p className="text-white text-opacity-70 mb-4 text-[15px] cursor-pointer hover:text-yellow-400 border-b-2 border-dashed">
            Blog
          </p>
        </div>
      </div>
      <div className="w-4/5 mx-auto text-[15px] text-white opacity-70">
        copyright @ 2024 all right reserved soyeb islam
      </div>
    </div>
  );
};

export default Footer;
