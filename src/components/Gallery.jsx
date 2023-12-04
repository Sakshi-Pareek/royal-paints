import React from "react";
import LivingRoom from "../assets/images/webp/living.webp";
import Office from "../assets/images/webp/office.webp";
import Kitchen from "../assets/images/webp/dining.webp";
import BathingArea from "../assets/images/webp/bathroom.webp";
import BedRoom from "../assets/images/webp/bedroom.webp";
import GalleryBottomLayer from "../assets/images/webp/satisfied-client-top-layer.webp";

const Gallery = () => {
  return (
    <>
      <div className="relative 2xl:px-72 px-4">
        <img
          src={GalleryBottomLayer}
          alt="GalleryBottomLayer"
          className="absolute xl:bottom-[-10%] bottom-[-5%] start-0 w-full z-10"
        />
        <h2
          className="font-bold md:text-[32px] text-[30px] bg-gradient-to-b from-[#F16D92] to-[#281AC8] text-transparent bg-clip-text text-center 2xl:mt-[-100px] sm:mb-24 mb-10"
          data-aos="fade-down" id="gallery"
        >
          Gallery
        </h2>
        <div className="flex justify-center items-center flex-col relative z-20">
          <div className="flex lg:gap-32 sm:gap-10 gap-4" data-aos="fade-down">
            <div className="translate-y-1/3">
              <div className=" bg-gradient-to-t from-[#2F245C] to-[#CC33D9] sm:p-2 p-1 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={LivingRoom}
                  alt="LivingRoom"
                  className="max-w-[400px] h-full w-full rounded-2xl hover:scale-[1.01] transition-all duration-300 ease-linear"
                />
              </div>
              <h4 className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text lg:text-[28px] sm:text-xl text-base sm:mt-4 mt-2 font-medium pb-1 mr-auto max-md:text-center">
                Living Room
              </h4>
            </div>
            <div>
              <div className=" bg-gradient-to-t from-[#2F245C] to-[#CC33D9] sm:p-2 p-1 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={Office}
                  alt="Office"
                  className="max-w-[400px] h-full w-full rounded-2xl hover:scale-[1.01] transition-all duration-300 ease-linear"
                />
              </div>
              <h4 className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text lg:text-[28px] sm:text-xl text-base sm:mt-4 mt-2 font-medium pb-1 mr-auto max-md:text-center">
                Office
              </h4>
            </div>
          </div>
          <div className="flex lg:gap-32 sm:gap-10 gap-4" data-aos="fade-down">
            <div className="translate-y-[50%]">
              <div className=" bg-gradient-to-t from-[#2F245C] to-[#CC33D9] sm:p-2 p-1 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={Kitchen}
                  alt="Kitchen"
                  className="max-w-[400px] h-full w-full rounded-2xl hover:scale-[1.01] transition-all duration-300 ease-linear"
                />
              </div>
              <h4 className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text lg:text-[28px] sm:text-xl text-base sm:mt-4 mt-2 font-medium pb-1 mr-auto max-md:text-center">
                Kitchen
              </h4>
            </div>
            <div>
              <div className=" bg-gradient-to-t from-[#2F245C] to-[#CC33D9] sm:p-2 p-1 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={BathingArea}
                  alt="BathingArea"
                  className="max-w-[400px] h-full w-full rounded-2xl hover:scale-[1.01] transition-all duration-300 ease-linear"
                />
              </div>
              <h4 className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text lg:text-[28px] sm:text-xl text-base sm:mt-4 mt-2 font-medium pb-1 mr-auto max-md:text-center">
                Bath
              </h4>
            </div>
          </div>
          <div className="flex lg:gap-32 sm:gap-10 gap-4" data-aos="fade-down">
            <div className="translate-y-[50%] invisible ">
              <div className=" bg-gradient-to-t from-[#2F245C] to-[#CC33D9] sm:p-2 p-1 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={Kitchen}
                  alt="Kitchen"
                  className="max-w-[400px] h-full w-full rounded-2xl hover:scale-[1.01] transition-all duration-300 ease-linear"
                />
              </div>
              <h4 className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text lg:text-[28px] sm:text-xl text-base sm:mt-4 mt-2 font-medium pb-1 mr-auto max-md:text-center">
                Kitchen
              </h4>
            </div>
            <div>
              <div className=" bg-gradient-to-t from-[#2F245C] to-[#CC33D9] sm:p-2 p-1 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={BedRoom}
                  alt="BedRoom"
                  className=" rounded-2xl max-w-[400px] h-full w-full hover:scale-[1.01] transition-all duration-300 ease-linear"
                />
              </div>
              <h4 className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text lg:text-[28px] sm:text-xl text-base sm:mt-4 mt-2 font-medium pb-1 mr-auto max-md:text-center">
                Bed Room
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
