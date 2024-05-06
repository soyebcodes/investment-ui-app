import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
};
const ReviewCard = ({ image, name }: Props) => {
  return (
    <div className="p-6 m-4 bg-[#022055]">
      <div className="flex items-center space-x-2 mt-4 ">
        <FaStar className="w-4 height-4 text-yellow-500" />
        <FaStar className="w-4 height-4 text-yellow-500" />
        <FaStar className="w-4 height-4 text-yellow-500" />
        <FaStar className="w-4 height-4 text-yellow-500" />
        <FaStar className="w-4 height-4 text-yellow-500" />
      </div>
      <p className="mt-4 text-white text-opacity-70">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam non
        accusamus veniam id sed perspiciatis quidem modi.
      </p>
      <div className="flex mt-8 items-center space-x-4">
        <div>
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-lg text-white uppercase">{name}</h1>
          <p className="mt-1.5 text-base text-white text-opacity-70">
            CEO, Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
