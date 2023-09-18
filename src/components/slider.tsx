"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    appendDots: (dots: any) => (
      <div className="bg-lime-300 p-0 w-full relative">
        <ul className="bg-transparent-color selection:bg-white absolute bottom-8 left-0">
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div className="w-full bg-warning-color overflow-x-clip">
      <Slider {...settings}>
        <div className="w-full h-[360px] bg-primary-color flex items-center justify-center">
          Slider 1
        </div>
        <div className="w-full h-[360px] bg-green-200 flex items-center justify-center">
          Slider 3
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
