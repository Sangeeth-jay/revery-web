import React from "react";
import Service from "./Service";

const Hero2 = () => {
  return (
    <>
      <div className="h-fit w-full bg-white text-[#0F072C] flex flex-row items-center justify-center px-32 py-24 gap-8">
        <div className="w-1/3">
          <h1 className="text-5xl font-bold">A New Venture with Deep Expertise</h1>
        </div>
        <div className="flex flex-col w-1/3  font-medium gap-4">
          <p className="px-2">
            Based in Sri Lanka, we deliver top-notch digital solutions to
            elevate your business. From innovative tech to strategic marketing,
            we enhance your digital presence and drive growth, visibility, and
            results.
          </p>
          <p className="text-[#FF0303] hover:bg-[#FF0303] hover:text-white duration-500 cursor-pointer w-fit p-2">Tell us about your project</p>
        </div>
      </div>
      <Service/>
    </>
  );
};

export default Hero2;
