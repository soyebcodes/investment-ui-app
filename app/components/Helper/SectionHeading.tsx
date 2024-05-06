import React from "react";

type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="text-center p-3">
      <h1 className="text-[22px] md:text-[30px] text-white font-semibold ">
        {heading}
      </h1>
      <h1 className="text-[16px] mt-1 md:text-[20px] text-white text-opacity-65">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Co quaerat ea!
      </h1>
    </div>
  );
};

export default SectionHeading;
