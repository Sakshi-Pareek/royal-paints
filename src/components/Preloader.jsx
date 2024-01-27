import React from "react";
import { LoaderImg } from "./Icons";

const Preloader = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed bg-gradient-to-b from-slate-900 to-fuchsia-600">
        <LoaderImg />
      </div>
    </>
  );
};

export default Preloader;
