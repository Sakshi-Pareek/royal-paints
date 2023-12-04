import React from "react";
import { Google, Facebook, Twitter, Instagram } from "./Icons";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-fuchsia-600 lg:px-20 px-4" id="contact">
        <div className="md:py-[100px] py-[50px]">
          <div className="md:flex-row flex flex-col md:items-center md:justify-start xl:gap-60 md:gap-40 gap-8">
            <div className="md:w-1/3" data-aos="fade-down">
              <p className="text-base font-bold text-white m-0">RP</p>
              <p className="text-sm font-normal text-white m-0 pt-[8px] lg:max-w-[369px]">
                Painting with RP means never painting your house again! Our
                special paint coating comes with a 20 years warranty.
              </p>
              <div className="flex items-center gap-x-[18px] pt-[18px]">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="hover:translate-y-[-5px] transition-all duration-200 ease-linear"
                >
                  {" "}
                  <Google />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="hover:translate-y-[-5px] transition-all duration-200 ease-linear"
                >
                  {" "}
                  <Facebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="hover:translate-y-[-5px] transition-all duration-200 ease-linear"
                >
                  {" "}
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="hover:translate-y-[-5px] transition-all duration-200 ease-linear"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex items-start xl:gap-36 gap-28 pt-[20px] lg:pt-[0]">
              <ul className="p-0" data-aos="fade-down">
                <li>
                  <a href="" className="font-normal text-lg text-white ">
                    Links{" "}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-normal text-sm text-slate-300 pt-[20px] inline-block hover:text-white hover:underline transition-all duration-200 ease-linear"
                  >
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="ff_poppins font-normal text-sm text-slate-300 pt-[8px] whitespace-nowrap hover:text-white hover:underline transition-all duration-200 ease-linear"
                  >
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-normal text-sm text-slate-300 pt-[8px] hover:text-white hover:underline transition-all duration-200 ease-linear"
                  >
                    Gallery{" "}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-normal text-sm text-slate-300 pt-[8px] whitespace-nowrap hover:text-white hover:underline transition-all duration-200 ease-linear"
                  >
                    Contact Us{" "}
                  </a>
                </li>
              </ul>
              <ul className="p-0" data-aos="fade-down">
                <li>
                  <a href="" className="font-normal text-lg text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+91 1234567890"
                    className="font-normal text-sm text-slate-300 pt-[20px] inline-block hover:text-white hover:underline transition-all duration-200 ease-linear"
                  >
                    +91 1234567890{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:XYZ@gmail.com"
                    className="font-normal text-sm text-slate-300 pt-[8px] hover:text-white hover:underline transition-all duration-200 ease-linear"
                  >
                    XYZ@gmail.com{" "}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-normal text-sm text-slate-300 pt-[8px] hover:text-white hover:underline transition-all duration-200 ease-linear"
                  >
                    Address{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
