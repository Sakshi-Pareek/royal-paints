import React, { useState } from "react";
import MeniIcon from "../assets/images/png/menu_icon.png";
import WebLogo from "../assets/images/webp/Royal_Paintslogo.webp";
import PoolSideHouse from "../assets/images/webp/pool-side-house.webp";
import LivingAreaWithWallPicture from "../assets/images/webp/living-area-with-wall-picture.webp";
import HeaderBottomLayer from "../assets/images/webp/header-bottom-layer.webp";

const HeaderSection = () => {
  const [nav, setNav] = useState(false);
  if (nav === true) {
    document.body.classList.add("overflow-hidden");   
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-fuchsia-600 w-full flex flex-col relative">
        <img
          src={HeaderBottomLayer}
          alt="HeaderBottomLayer"
          className="absolute tab:bottom-[-11%] 2xl:bottom-[-9%] xl:bottom-[-8%] lg:bottom-[-3%] sm:bottom-[-3%] bottom-[-2%] left-0 w-full"
        />
        <nav className="py-2 pe-8 relative z-50" data-aos="fade-down">
          <div className="flex justify-between items-center">
            <a href="">
              <img
                src={WebLogo}
                alt="WebLogo"
                className="w-full h-[100px] max-w-[200px]"
              />
            </a>
            <div
              className={`${
                nav ? "max-md:left-0" : "max-md:left-full"
              } max-md:fixed max-md:w-full max-md:top-0 max-md:min-h-screen max-md:bg-black max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:z-10 transition-all duration-300 ease-linear]`}
            >
              <div
                className="md:hidden z-20 max-md:absolute max-md:top-10 max-md:right-10 text-white no-underline text-2xl font-bold cursor-pointer max-md:flex-col"
                onClick={() => setNav(false)}
              >
                X
              </div>
              <ul className="flex max-md:flex-col gap-6 items-center mb-0 ps-0">
                <li onClick={() => setNav(false)} className="md:mb-0 mb-6 relative hover:after:w-full">
                  <a href="" className="text-xl font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8] after:left-0 after:rounded-sm hover:after:w-[50%] hover:after:left-[30%] transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear">
                    Home
                  </a>
                </li>
                <li onClick={() => setNav(false)} className="md:mb-0 mb-6">
                  <a href="#about" className="text-xl font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8]after:left-0 after:rounded-sm hover:after:w-[50%] hover:after:left-[30%] transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear">
                    About Us
                  </a>
                </li>
                <li onClick={() => setNav(false)} className="md:mb-0 mb-6">
                  <a href="#gallery" className="text-xl font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8] after:left-0 after:rounded-sm hover:after:w-[50%] hover:after:left-[30%] transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear">
                    Gallery
                  </a>
                </li>
                <li onClick={() => setNav(false)} className="mb-0">
                  <a href="#contact" className="text-xl font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8] after:left-0 after:rounded-sm hover:after:w-[50%] hover:after:left-[30%] transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="md:hidden text-white mb-0"
              onClick={() => setNav(true)}
            >
              <img
                src={MeniIcon}
                alt="MeniIcon"
                className="max-w-[40px] max-h-[40px] cursor-pointer"
              />
            </div>
          </div>
        </nav>
        <div className="flex max-xl:flex-col justify-between items-center xl:my-16 lg:h-[750px] md:h-[800px] xl:h-[unset] lg:mb-0 md:mb-24" data-aos="zoom-out-up">
          <img
            src={PoolSideHouse}
            alt="PoolSideHouse"
            className="2xl:max-w-[512px] xl:max-w-[400px] max-w-[250px] max-h-[512px] object-cover max-xl:order-last max-xl:mr-auto lg:-translate-y-52 xl:-translate-y-0 max-lg:order-2"
          />
          <div className="xl:max-w-[506px] lg:max-w-[380px] 2xl:pl-0 xl:pl-10 mx-auto xl:text-start text-center xl:-translate-y-36  lg:-translate-y-44 2xl:-translate-y-0 max-xl:order-2 max-lg:order-first xl:mb-0 mb-8 lg:mt-0 md:mt-40 mt-20 max-sm:px-4">
            <h1 className="text-white font-semibold 2xl:text-5xl xl:text-[40px] sm:text-4xl text-3xl mb-4 ">
              We Make Your Home More Beautiful
            </h1>
            <p className="text-white md:text-[21px] text-lg font-normal xl:max-w-[419px] xl:text-start text-center">
              From choosing the right paint to getting an expert touch - leave
              it on us.
            </p>
          </div>
          <img
            src={LivingAreaWithWallPicture}
            alt="LivingAreaPicture"
            className="2xl:max-w-[624px] xl:max-w-[400px] max-w-[250px] max-h-[624px] object-cover max-xl:ml-auto max-xl:order-first max-lg:order-last lg:-translate-y-0 sm:-translate-y-24 -translate-y-20"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
