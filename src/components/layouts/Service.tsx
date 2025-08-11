import React from "react";
import Image from "next/image";
import WebDevPic from "@/assesst/Item/web-designing.gif";
import ProdDevPic from "@/assesst/Item/product-devlopment.gif";
import DigiMarkPic from "@/assesst/Item/digital-marketing.gif";
import UiUxPic from "@/assesst/Item/uiux-designing.gif";
import { IoIosCall } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { Footer } from "./Footer";
import { motion } from "motion/react";

type ComponentProps = unknown;

const MyComponent: React.FC<ComponentProps> = () => {
  return (
    <>
      <section id="service" className="w-full bg-white overflow-x-hidden">
        <div className="w-full h-fit flex flex-row items-center justify-center bg-[#0F072C] px-4 md:px-16 lg:px-32 py-6">
          <h1 className="text-3xl font-bold">We Provide</h1>
        </div>
        <div className="w-full h-fit flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between md:pr-16 lg:pr-32 text-[#0F072C]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:bg-[#F1EDFF] lg:bg-[#F1EDFF] w-full md:w-1/2 lg:w-1/2 md:rounded-r-full lg:rounded-r-full px-4  md:pl-16 lg:pl-32 py-6 flex flex-col lg:flex-row items-center gap-2 md:gap-2 lg:gap-8"
          >
            <h1 className="text-xl font-semibold hidden lg:block">
              Web <br />
              Development <br />
              Services
            </h1>
            <h1 className="text-xl font-semibold lg:hidden">
              Web Development Services
            </h1>
            <p className="text-sm">
              MERN Stack WordPress SEO optimizing Framer
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </motion.div>
          <div className="w-1/2 flex flex-col items-center md:items-end lg:items-end">
            <Image src={WebDevPic} alt="WebDevPic" className="w-3/4" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse items-center justify-between md:pl-16 lg:pl-32 text-[#0F072C]">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:bg-[#F1EDFF] lg:bg-[#F1EDFF] w-full md:w-1/2 lg:w-1/2 rounded-l-full px-4 md:pr-16 md:pl-8 lg:pr-32 py-6 flex flex-col lg:flex-row items-center gap-2 md:gap-2 lg:gap-8"
          >
            <h1 className="text-xl font-semibold text-right hidden lg:block">
              Product
              <br />
              Development <br />
              Services
            </h1>
            <h1 className="text-xl font-semibold lg:hidden">
              Product Development Services
            </h1>
            <p className="text-sm">
              MERN Stack Flutter Java PHP Python
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </motion.div>
          <div className="w-1/2 flex flex-col items-center md:items-start lg:items-start">
            <Image src={ProdDevPic} alt="ProdDevPic" className="w-3/4" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between md:pr-16 lg:pr-32 text-[#0F072C]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:bg-[#F1EDFF] lg:bg-[#F1EDFF] w-full md:w-1/2 lg:w-1/2 rounded-r-full px-4 md:pl-16 lg:pl-32 py-6 flex flex-col md:flex-row lg:flex-row items-center gap-2 md:gap-2 lg:gap-8"
          >
            <h1 className="text-xl font-semibold hidden lg:block">
              Digital
              <br />
              Marketing <br />
              Services
            </h1>
            <h1 className="text-xl font-semibold lg:hidden">
              Digital Marketing Services
            </h1>
            <p className="text-sm">
              Digital Strategy Advertising Content Creation
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </motion.div>
          <div className="w-1/2 flex flex-col items-center md:items-end lg:items-end">
            <Image src={DigiMarkPic} alt="DigiMarkPic" className="w-3/4" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse items-center justify-between md:pl-16 lg:pl-32 text-[#0F072C]">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:bg-[#F1EDFF] lg:bg-[#F1EDFF] w-full md:w-1/2 lg:w-1/2 rounded-l-full px-4 md:pr-16 md:pl-8 lg:pl-8 lg:pr-32 py-6 flex flex-col lg:flex-row items-center gap-2 md:gap-2 lg:gap-8"
          >
            <h1 className="text-xl font-semibold text-right hidden lg:block">
              UI/UX
              <br />
              Design <br />
              Services
            </h1>
            <h1 className="text-xl font-semibold lg:hidden">
              UI/UX Design Services
            </h1>
            <p className="text-sm">
              UX Research Design Prototyping & Wireframing
              <br />
              <span className="font-semibold">and more...</span>
            </p>
          </motion.div>
          <div className="w-1/2 flex flex-col items-center md:items-start lg:items-start">
            <Image src={UiUxPic} alt="UiUXPic" className="w-3/4" />
          </div>
        </div>
        <div className="w-full h-fit text-center flex flex-col gap-4 items-center justify-center px-4 py-8 md:py-16 lg:py-32">
          <h1 className="text-5xl font-bold text-[#0F072C] ">
            How we can help?
          </h1>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">
            Talk to our experts today.
          </h1>
          <p className="group bg-[#FF0303] text-3xl font-bold text-white  cursor-pointer w-fit px-8 py-4 flex flex-row items-center gap-2">
            <IoIosCall className="group-hover:animate-shake" />
            Contact Us
            <MdArrowRightAlt />
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyComponent;
