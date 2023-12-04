import React from "react";
import StarImg from "../assets/images/png/Star.png";
import SatisfiedBottomLayer from "../assets/images/webp/satisified-bottom-layer.webp";

const Satisfied = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-fuchsia-600 xl:py-64 sm:pt-40 pt-24 sm:pb-32 pb-24 2xl:px-10 pl-8 pr-4 relative">
        <img
          src={SatisfiedBottomLayer}
          alt="SatisfiedBottomLayer"
          className="absolute md:bottom-[-3%] bottom-[-1px] start-0 w-full"
        />
        <h2 className="mx-auto text-center font-bold md:text-[32px] text-[28px] text-white max-w-[373px] xl:mb-[48px] sm:mb-8 mb-4" data-aos="fade-down">
          10,000 Satisfied clients around the world
        </h2>
        <p className="max-w-[542px] text-white font-normal text-base lg:leading-10 text-center mx-auto xl:mb-4 mb-6" data-aos="fade-down">
          Yeah! we’re proud with numbers. We’ve helped thousands of clients all
          around the world with our bespoke service. Hover ontop of them pic to
          view their testimonials.
        </p>
        <div className="flex max-md:flex-col justify-between lg:gap-60 md:gap-56 mx-auto">
          <div className="w-full" data-aos="fade-right">
            <div className="relative md:max-w-[419px] md:mb-[72px] mb-10 cursor-pointer">
              <div className=" md:max-w-[419px] px-6 py-[17px] bg-[#C4C4C4] rounded-[15px] items-start">
                <h6 className="text-black mb-[6px] font-normal text-base">
                  Neya from Goa
                </h6>
                <img
                  src={StarImg}
                  alt="StarImg"
                  className="w-full h-full max-w-[77px] object-cover mb-[7px]"
                />
                <h4 className="text-black text-sm font-bold">Best service</h4>
                <p className="text-black text-sm font-normal mb-0">
                  Good material, Thank you.
                </p>
              </div>
              <div className="w-0 h-0 border-t-[20px] border-solid border-t-[transparent] border-b-[20px] border-b-[transparent] border-l-[40px] border-l-[#C4C4C4] absolute top-1/3 right-[-23px] max-md:left-[-23px] rotate-180 md:rotate-0"></div>
            </div>
            <div className="relative md:max-w-[419px] md:mb-[72px] mb-10 xl:translate-x-60 lg:translate-x-20 md:translate-x-16 cursor-pointer">
              <div className=" md:max-w-[419px] px-6 py-[17px] bg-[#C4C4C4] rounded-[15px] items-start">
                <h6 className="text-black mb-[6px] font-normal text-base">
                  Pooja from UP
                </h6>
                <img
                  src={StarImg}
                  alt="StarImg"
                  className="w-full h-full max-w-[77px] object-cover mb-[7px]"
                />
                <h4 className="text-black text-sm font-bold">Best service</h4>
                <p className="text-black text-sm font-normal mb-0">
                  Good material, Thank you.
                </p>
              </div>
              <div className="w-0 h-0 border-t-[20px] border-solid border-t-[transparent] border-b-[20px] border-b-[transparent] border-l-[40px] border-l-[#C4C4C4] absolute top-1/3 right-[-23px] max-md:left-[-23px] rotate-180 md:rotate-0"></div>
            </div>
            <div className="relative md:max-w-[419px] cursor-pointer">
              <div className=" md:max-w-[419px] px-6 py-[17px] bg-[#C4C4C4] rounded-[15px] items-start">
                <h6 className="text-black mb-[6px] font-normal text-base">
                  klyan from Gujarat
                </h6>
                <img
                  src={StarImg}
                  alt="StarImg"
                  className="w-full h-full max-w-[77px] object-cover mb-[7px]"
                />
                <h4 className="text-black text-sm font-bold">Best service</h4>
                <p className="text-black text-sm font-normal mb-0">
                  Good material, Thank you.
                </p>
              </div>
              <div className="w-0 h-0 border-t-[20px] border-solid border-t-[transparent] border-b-[20px] border-b-[transparent] border-l-[40px] border-l-[#C4C4C4] absolute top-1/3 right-[-23px] max-md:left-[-23px] rotate-180 md:rotate-0"></div>
            </div>
          </div>
          <div className="w-full" data-aos="fade-left">
            <div className="relative md:max-w-[419px] mb-[40px] md:ml-auto md:translate-y-16 md:mt-0 mt-[40px] cursor-pointer">
              <div className=" md:max-w-[419px] px-6 py-[17px] bg-[#C4C4C4] rounded-[15px] items-start">
                <h6 className="text-black mb-[6px] font-normal text-base">
                  Ankit from MP
                </h6>
                <img
                  src={StarImg}
                  alt="StarImg"
                  className="w-full h-full max-w-[77px] object-cover mb-[7px]"
                />
                <h4 className="text-black text-sm font-bold">
                  Wonderful service
                </h4>
                <p className="text-black text-sm font-normal mb-0">
                  Good deal and very wonderful service thank you.
                </p>
              </div>
              <div className="w-0 h-0 border-t-[20px] border-solid border-t-[transparent] border-b-[20px] border-b-[transparent] border-l-[40px] border-l-[#C4C4C4] absolute top-1/3 left-[-23px] rotate-180 "></div>
            </div>
            <div className="relative md:max-w-[419px] md:ml-auto md:translate-y-40 lg:-translate-x-32 md:-translate-x-20 cursor-pointer">
              <div className=" md:max-w-[419px] px-6 py-[17px] bg-[#C4C4C4] rounded-[15px] items-start">
                <h6 className="text-black mb-[6px] font-normal text-base">
                  Sushant from Mumbai
                </h6>
                <img
                  src={StarImg}
                  alt="StarImg"
                  className="w-full h-full max-w-[77px] object-cover mb-[7px]"
                />
                <h4 className="text-black text-sm font-bold">
                  Wonderful service
                </h4>
                <p className="text-black text-sm font-normal mb-0">
                  Good deal and very wonderful service thank you.
                </p>
              </div>
              <div className="w-0 h-0 border-t-[20px] border-solid border-t-[transparent] border-b-[20px] border-b-[transparent] border-l-[40px] border-l-[#C4C4C4] absolute top-1/3 left-[-23px] rotate-180 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Satisfied;
