import React from "react";
import PreLoader from "../assets/images/png/preloader.jpg";

const Preloader = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed bg-white z-50">
        <img src={PreLoader} alt="Preloader" />
      </div>
    </>
  );
};

export default Preloader;
