import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-20 pb-16 bg-[#5507e1]">
      {/* section heading */}
      <SectionHeading heading="Pricing" />
      {/* define grid system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-16">
        {/*Price card */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <PriceCard
            bg="bg-teal-700"
            days="30"
            percentage="10"
            min="5"
            max="100"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          <PriceCard
            bg="bg-red-900"
            days="30"
            percentage="340"
            min="5"
            max="100"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <PriceCard
            bg="bg-orange-700"
            days="20"
            percentage="10"
            min="5"
            max="230"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
