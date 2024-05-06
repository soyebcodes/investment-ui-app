import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* section heading */}
      <SectionHeading heading="Blog" />
      {/* define grid system */}
      <div className="w-4/5 mt-16 items-center md:mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* blog card */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center">
          <BlogCard
            image="/images/b1.jpg"
            title="10 Real Ways To Make Money Fast"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <BlogCard
            image="/images/b3.jpg"
            title="10 Real Ways To Make Money Fast"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <BlogCard
            image="/images/b2.jpg"
            title="10 Real Ways To Make Money Fast"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
