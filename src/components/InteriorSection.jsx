import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InteriorCardImg from "../assets/images/webp/interior-img.webp";
import InteriorBottomLayer from "../assets/images/webp/gallery-top-layer.webp";
import ColorSampleCardImg from "../assets/images/webp/color-sample.webp";
import EnteriorCardImg from "../assets/images/webp/exterior.webp";
import Slider from "react-slick";

const InteriorSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "522px",
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "478px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "469px",
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "445px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "416px",
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "330px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "245.5px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "203px",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-fuchsia-600 2xl:pt-80 xl:pt-60 2xl:pb-96 xl:pb-60 lg:py-40 md:pt-[60px] md:pb-44 sm:pt-12 pt-3 sm:pb-40 pb-32 2xl:px-44 px-4 relative">
        <img
          src={InteriorBottomLayer}
          alt="InteriorBottomLayer"
          className="absolute 2xl:bottom-[-3%] xl:bottom-[-4%] lg:bottom-[-4%]  md:bottom-[-1%] sm:bottom-[-3%] bottom-[-1%] start-0 w-full"
        />
        <div className="max-w-[1920px]" data-aos="zoom-out-up">
          <Slider {...settings}>
            <div className="sm:px-0 px-1">
              <div className="slide_card bg-white rounded-[15px] xl:px-12 lg:px-6 sm:px-4 px-2 h-full lg:my-28 mt-28 md:mb-20 sm:mb-16 mb-4 cursor-pointer">
                <h4 className="xl:pt-[23px] sm:pt-2 xl:pb-[19px] sm:pb-2 py-1 lg:text-[28px] md:text-[22px] text-[18px] font-bold text-[#888888] md:leading-10">
                Interior
                </h4>
                <img
                  src={InteriorCardImg}
                  alt="InteriorCardImg"
                  className="mx-auto"
                />
                <button className="text-white md:text-base text-xs font-bold leading-none rounded-[100px] bg-[#888888] py-[12px] md:px-[39px] px-[30px] mt-[15px] xl:mb-[22px] mb-[12px]">
                  MORE
                </button>
              </div>
            </div>
            <div className="sm:px-0 px-1">
              <div className="slide_card bg-white rounded-[15px] xl:px-12 lg:px-6 sm:px-4 px-2 h-full lg:my-28 mt-28 md:mb-20 sm:mb-16 mb-4 cursor-pointer">
                <h4 className="xl:pt-[23px] sm:pt-2 xl:pb-[19px] sm:pb-2 py-1 lg:text-[28px] md:text-[22px] text-[18px] font-bold text-[#888888] md:leading-10">
                Your perfect color
                </h4>
                <img
                  src={ColorSampleCardImg}
                  alt="ColorSampleCardImg"
                  className="mx-auto"
                />
                <button className="text-white md:text-base text-xs font-bold leading-none rounded-[100px] bg-[#888888] py-[12px] md:px-[39px] px-[30px] mt-[15px] xl:mb-[22px] mb-[12px]">
                  MORE
                </button>
              </div>
            </div>
            <div className="sm:px-0 px-1">
              <div className="slide_card bg-white rounded-[15px] xl:px-12 lg:px-6 sm:px-4 px-2 h-full lg:my-28 mt-28 m:mb-20 sm:mb-16 mb-4 cursor-pointer">
                <h4 className="xl:pt-[23px] sm:pt-2 xl:pb-[19px] sm:pb-2 py-1 lg:text-[28px] md:text-[22px] text-[18px] font-bold text-[#888888] md:leading-10">
                Exterior 
                </h4>
                <img
                  src={EnteriorCardImg}
                  alt="EnteriorCardImg"
                  className="mx-auto"
                />
                <button className="text-white md:text-base text-xs font-bold leading-none rounded-[100px] bg-[#888888] py-[12px] md:px-[39px] px-[30px] mt-[15px] xl:mb-[22px] mb-[12px]">
                  MORE
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default InteriorSection;
