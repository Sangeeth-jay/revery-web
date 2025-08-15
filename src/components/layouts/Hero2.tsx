import React from "react";
import Service from "./Service";

const Hero2 = () => {
  return (
    <>
      <div
        id="about"
        className="h-fit w-full bg-white text-[#0F072C] flex flex-col md:flex-row lg:flex-row items-center justify-center px-4 md:px-16 lg:px-32 py-8 md:py-16 lg:py-24 gap-8"
      >
        <div className="w-full lg:w-1/3 text-center md:text-left lg:text-left">
          <h1 className="text-5xl font-bold">
            A New Venture with Deep Expertise
          </h1>
        </div>
        <div className="flex flex-col items-center md:items-start w-full lg:w-1/3  font-medium gap-4 text-center md:text-left lg:text-left">
          <p className="px-2">
            Based in Sri Lanka, we deliver top-notch digital solutions to
            elevate your business. From innovative tech to strategic marketing,
            we enhance your digital presence and drive growth, visibility, and
            results.
          </p>
          <button
            onClick={() => window.open("https://wa.me/+94725050191", "_blank")}
            className="text-[#FF0303] hover:bg-[#FF0303] hover:text-white duration-500 cursor-pointer w-fit p-2"
          >
            Tell us about your project
          </button>
        </div>
      </div>
      <Service />
    </>
  );
};

export default Hero2;
