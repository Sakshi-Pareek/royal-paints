import React from "react";
import BedRoomView from "../assets/images/webp/welcome-home-bedroom-view.webp";
import Charminghouse from "../assets/images/webp/charming-house.webp";

const WarmHome = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-slate-900 to-fuchsia-600 2xl:px-20 px-4 xl:pt-52 sm:pt-32 pt-28 pb-9">
        <div className="xl:flex items-center justify-between">
          <div className="w-full h-full bg-white p-2 rounded-[24px] max-w-[405px] xl:mb-0 mb-6 overflow-hidden cursor-pointer"data-aos="fade-right">
            <img
              src={BedRoomView}
              alt="BedRoomView"
              className="rounded-[24px] w-full max-w-[405px]  hover:scale-[1.01] transition-all duration-300 ease-linear"
            />
          </div>
          <div className="xl:ml-auto text-center" data-aos="fade-down">
            <h4 className="text-white 2xl:text-[42px] xl:text-[32px] sm:text-[30px] text-2xl font-bold tracking-[3px] mb-2">
              Creating a Warm,
            </h4>
            <h3 className="text-white 2xl:text-[42px] xl:text-[32px] sm:text-[32px] text-2xl font-bold tracking-[3px] sm:ms-20">
              Welcoming Home
            </h3>
          </div>
          <div className="ml-auto"data-aos="fade-left">
            <div className="w-full h-full bg-white p-2 rounded-[24px] max-w-[405px] xl:-translate-y-20 ml-auto xl:mt-0 mt-6 overflow-hidden cursor-pointer">
            <img
              src={Charminghouse}
              alt="Charminghouse"
              className="rounded-[24px] w-full max-w-[400px]  hover:scale-[1.01] transition-all duration-300 ease-linear"
            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarmHome;
