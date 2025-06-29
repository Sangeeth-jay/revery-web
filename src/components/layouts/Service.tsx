import React from "react";
import Image from "next/image";
import WebDevPic from "@/assesst/Item/Clip path group.png";
import ProdDevPic from "@/assesst/Item/development-GLynLEZonm.png";
import DigiMarkPic from "@/assesst/Item/Clip path group (1).png";
import UiUxPic from "@/assesst/Item/creative-3d-visual-animation-website-development-f9bsAdYcsm.png";

type ComponentProps = unknown;

const MyComponent: React.FC<ComponentProps> = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="w-full h-fit flex flex-row items-center justify-center bg-[#0F072C] px-32 py-6">
          <h1 className="text-3xl font-bold">We Provide</h1>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-between pr-32 text-[#0F072C]">
          <div className="bg-[#F1EDFF] w-1/2 rounded-r-full pl-32 py-6 flex flex-row gap-8">
            <h1 className="text-xl font-semibold">
              Web <br />
              Development <br />
              Services
            </h1>
            <p>
              MERN Stack WordPress SEO optimizing Framer
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </div>
          <div className="w-1/2 flex items-end">
            <Image src={WebDevPic} alt="WebDevPic" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-row-reverse items-center justify-between pl-32 text-[#0F072C]">
          <div className="bg-[#F1EDFF] w-1/2 rounded-l-full pl-32 py-6 flex flex-row gap-8">
            <h1 className="text-xl font-semibold">
              Product
              <br />
              Development <br />
              Services
            </h1>
            <p>
              MERN Stack Flutter Java PHP
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </div>
          <div className="w-1/2 flex items-end">
            <Image src={ProdDevPic} alt="ProdDevPic" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-between pr-32 text-[#0F072C]">
          <div className="bg-[#F1EDFF] w-1/2 rounded-r-full pl-32 py-6 flex flex-row gap-8">
            <h1 className="text-xl font-semibold">
              Digital
              <br />
              Marketing <br />
              Services
            </h1>
            <p>
              Digital Strategy Advertising Content Creation
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </div>
          <div className="w-1/2 flex items-end">
            <Image src={DigiMarkPic} alt="DigiMarkPic" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-row-reverse items-center justify-between pl-32 text-[#0F072C]">
          <div className="bg-[#F1EDFF] w-1/2 rounded-l-full pl-32 py-6 flex flex-row gap-8">
            <h1 className="text-xl font-semibold">
              UI/UX
              <br />
              Design <br />
              Services
            </h1>
            <p>
              UX Research Design Prototyping
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </div>
          <div className="w-1/2 flex items-end">
            <Image src={UiUxPic} alt="UiUXPic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyComponent;
