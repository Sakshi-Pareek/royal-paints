import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="px-4 xl:pt-[190px] xl:pb-[91px] py-[60px] text-center">
        <h4 className="font-bold bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-transparent bg-clip-text lg:text-[28px] text-xl lg:mb-[37px] mb-5" data-aos="fade-down">
          Subscribe our newsletter
        </h4>
        <p className="text-black text-base font-normal lg:leading-10 max-w-[378.42px] mx-auto sm:mb-[23px]" data-aos="fade-down">
          Subscribe to our newsletter for daily/weekly update of our products
          and services.
        </p>
        <div className="sm:flex justify-center items-center sm:mt-9 mt-6 gap-5 w-full" data-aos="fade-down">
          <div className="bg-clip-padding bg-gradient-to-b from-[#FD749B] to-[#281AC8] p-[1px] rounded-[100px] w-full max-w-[420px]">
            <input
              type="text"
              placeholder="EMAIL"
              className="py-3 rounded-[100px] sm:pl-7 pl-4 w-full outline-none placeholder-black !font-normal !text-base"
            />
          </div>
          <button className="font-bold text-sm text-white py-4 px-10 rounded-[100px] bg-gradient-to-b from-[#FD749B] to-[#281AC8] sm:mt-0 mt-6 hover:-translate-y-1 transition-all duration-300 ease-linear hover:shadow-btn_shadow">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
