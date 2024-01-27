import React from "react";
import ColorPlate from "../assets/images/png/color_palete.png";
import WelcomeBottonLayer from "../assets/images/webp/welcome-home-top-layer.webp";

const WelcomeToRp = () => {
  return (
    <>
      <div className="relative">
        <img
          src={WelcomeBottonLayer}
          alt="WelcomeBottonLayer"
          className="absolute start-0 tab:-bottom-[33%] 2xl:-bottom-[31%] laptop:-bottom-[25%] xl:-bottom-[25%] lg:-bottom-[10%] sm:-bottom-[8%] -bottom-[4.5%] w-full z-10"
        />
        <div className="container md:px-4 px-4 mx-auto py-4 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-28 sm:gap-10 gap-6">
            <div className="flex flex-col justify-center">
              <div className="rotate-[290deg] bg-gradient-to-b from-slate-900 to-fuchsia-600 md:p-2 p-1 rounded-[28px] sm:max-w-[342px] max-w-[210px] mx-auto">
                <img
                  src={ColorPlate}
                  alt="ColorPlate"
                  className="w-full sm:max-w-[342px] max-w-[210px] max-h-[448px] h-full object-cover mx-auto rounded-[28px] rotate-[180deg] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center xl:text-start text-center">
              <h2
                className="md:text-[32px] text-[30px] font-bold bg-gradient-to-b from-[#021A38] to-[#CC33D9] text-transparent bg-clip-text sm:mb-7 mb-5"
                data-aos="fade-left"
              >
                Welcome to RP
              </h2>
              <p
                className="text-[#333] sm:text-base text-sm font-normal lg:leading-10 mb-7"
                data-aos="fade-left"
              > A family-run business, with our own factory nestled in India,
                we are producing a complete range of traditional and modern
                paints. We formulate high performance paint, blended with the
                best ingredients. Our company includes interior and exterior
                paints, oil-based paints, floor paints and a special range of
                antimicrobial paints. With a color palette you can easily mix
                the colors together to expand the range. The numbers of creating
                different textures, finishes and shades are unlimited.
              </p>
              <div data-aos="fade-left">
              <button
                className="text-white text-center text-base font-bold leading-none rounded-[100px] btn_gradient py-[17px] px-[40px] h-[54px] w-[186px] xl:mx-0 mx-auto hover:shadow-btn_hover transition-all duration-300 ease-linear"
              
              >
                MORE
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeToRp;
