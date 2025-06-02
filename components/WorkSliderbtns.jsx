"use client";


import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WorkSliderbtns = ({ containerStyles, btnStyles, swiper }) => {
  if (!swiper) return null; // Don't render if swiper is not initialized

  return (
    <div className={containerStyles}>
      <button
        onClick={() => swiper?.slidePrev()}
        className={btnStyles}
        type="button"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className={btnStyles}
        type="button"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default WorkSliderbtns;