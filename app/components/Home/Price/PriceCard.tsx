import React from "react";

type Props = {
  bg: string;
  days: string;
  percentage: string;
  min: string;
  max: string;
};
const PriceCard = ({ bg, days, percentage, min, max }: Props) => {
  return (
    <div className={`${bg} p-6 text-center rounded-lg`}>
      <h1 className="text-[17px] font-bold md:text-[20px] text-white mt-8 ">
        After {days} {""}{" "}
      </h1>
      <h1 className="w-4/5 mx-auto bg-orange-600 text-white text-[23px] font-black p-4 rounded-lg mt-6">
        {percentage}%
      </h1>
      <h1 className="mt-4 text-[16px] text-white mb-4">
        {" "}
        Minimum Invest : ${min}
      </h1>
      <h1 className="mt-4 text-[16px] text-white mb-4">
        {" "}
        Maximum Invest : ${max}{" "}
      </h1>
      <div className="text-center mt-8">
        <button className="rounded px-10 py-2 overflow-hidden group bg-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Deposit $</span>
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
