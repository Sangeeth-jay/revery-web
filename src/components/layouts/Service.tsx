import React from "react";
import Image from "next/image";
import WebDevPic from "@/assesst/Item/web-designing.gif";
import ProdDevPic from "@/assesst/Item/product-devlopment.gif";
import DigiMarkPic from "@/assesst/Item/digital-marketing.gif";
import UiUxPic from "@/assesst/Item/uiux-designing.gif";
import { IoIosCall } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { Footer } from "./Footer";

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
          <div className="w-1/2 flex flex-col items-end">
            <Image src={WebDevPic} alt="WebDevPic" className="w-3/4" />
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
          <div className="w-1/2 flex flex-col items-start">
            <Image src={ProdDevPic} alt="ProdDevPic" className="w-3/4" />
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
          <div className="w-1/2 flex flex-col items-end">
            <Image src={DigiMarkPic} alt="DigiMarkPic" className="w-3/4" />
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
          <div className="w-1/2 flex flex-col items-start">
            <Image src={UiUxPic} alt="UiUXPic" className="w-3/4" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-4 items-center justify-center py-32">
          <h1 className="text-5xl font-bold text-[#0F072C]">
            How we can help?
          </h1>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">
            Talk to our experts today.
          </h1>
          <p className="group bg-[#FF0303] text-3xl font-bold text-white  cursor-pointer w-fit px-8 py-4 flex flex-row items-center gap-2">
            <IoIosCall className="group-hover:animate-shake" />
            Contact Us
            <MdArrowRightAlt/>
          </p>
        </div>

      </section>
      <Footer/>
    </>
  );
};

export default MyComponent;
