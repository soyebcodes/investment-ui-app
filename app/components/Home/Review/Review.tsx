import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-20 pb-16 bg-[#6a15e1]">
      {/* section heading */}
      <SectionHeading heading="Client Reviews" />
      <div className="w-4/5 mt-16 mx-auto">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
