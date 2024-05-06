import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
};

const BlogCard = ({ title, image }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="object-cover rounded-3xl "
      />
      <div className="flex mt-6 items-center space-x-4">
        <span className="text-[12px] text-white text-opacity-60">
          1 may 2024
        </span>
        <span className="text-[12px] text-white text-opacity-60">By Admin</span>
      </div>
      <h1 className="mt-4 cursor-pointer text-xl text-white font-semibold underline">
        {title}{" "}
      </h1>
      <p className="text-lg cursor-pointer mt-4 text-white underline">
        Read more
      </p>
    </div>
  );
};

export default BlogCard;
