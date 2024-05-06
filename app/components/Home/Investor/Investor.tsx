import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import InvestorCard from "./InvestorCard";

const Investor = () => {
  return (
    <div className="pt-20 pb-16 bg-[#032005] ">
      {/* section heading */}
      <SectionHeading heading="Top Investor" />
      {/* define grid system */}
      <div className="w-4/5 mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* investor profile card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <InvestorCard image="/images/i1.jpg" invest="243243" name="John" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          <InvestorCard image="/images/i2.jpg" invest="243243" name="John" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <InvestorCard image="/images/i3.jpg" invest="243243" name="John" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-anchor-placement="top-center"
        >
          <InvestorCard image="/images/i4.jpg" invest="243243" name="John" />
        </div>
      </div>
    </div>
  );
};

export default Investor;
