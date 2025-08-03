import Logo from "@/assesst/revery.png";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";

export const Footer = () => (
  <footer className="flex items-center justify-center w-full h-fit border-t px-4 md:px-16 lg:px-32 py-8">
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="w-full flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start justify-around gap-4">
        <div>
          <Image src={Logo} alt="logo" width={198} />
          <div className="w-full flex flex-row justify-around items-center gap-1">
            <IoLogoFacebook className="text-4xl" />
            <PiInstagramLogoFill className="text-4xl" />
            <AiFillTikTok className="text-4xl" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start lg:items-start">
          <h1 className="font-bold">Company</h1>
          <p className="font-thin">About</p>
          <p className="font-thin">Service</p>
          <p className="font-thin">Works</p>
        </div>
        <div className="flex flex-col items-center md:items-start lg:items-start">
          <h1 className="font-bold">Legal</h1>
          <p className="font-thin">Privacy Policy</p>
          <p className="font-thin">Terms & Conditions</p>
        </div>
      </div>
      <hr className="text-white w-full" />
      <p className="font-bold">
        &copy; Copyright {new Date().getFullYear()} Revery. All rights reserved.
      </p>
    </div>
  </footer>
);
