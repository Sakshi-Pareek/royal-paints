import React from "react";
import DiscoverBottomlayer from "../assets/images/webp/welcome-home-top-layer.webp";

const Discover = () => {
  return (
    <>
      <div className="relative sm:pb-10 pb-6 px-4 sm:pt-0 pt-4">
        <img
          src={DiscoverBottomlayer}
          alt="DiscoverBottomlayer"
          className="absolute tab:bottom-[-110%] 2xl:bottom-[-90%] xl:bottom-[-75%] lg:bottom-[-60%] sm:bottom-[-42%] bottom-[-20%] start-0 w-full"
        />
        <h2 className="text-[28px] font-bold text-center sm:mb-14 mb-8 bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text" data-aos="fade-down">
          Discover exclusive deals and discounts{" "}
        </h2>
        <a
          href=""
          className="text-black flex justify-center items-center text-base font-normal"data-aos="fade-down"
        >
          add Link
        </a>
      </div>
    </>
  );
};

export default Discover;
