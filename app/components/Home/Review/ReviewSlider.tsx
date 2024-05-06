"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const ReviewSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      sliderToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      sliderToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      sliderToSlide: 1,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemAriaLabel="item"
    >
      {/* review card */}
      <ReviewCard image="/images/c1.png" name="John Doe" />
      <ReviewCard image="/images/c2.png" name="John Doe" />
      <ReviewCard image="/images/c3.png" name="John Doe" />
      <ReviewCard image="/images/c4.png" name="John Doe" />
    </Carousel>
  );
};

export default ReviewSlider;
