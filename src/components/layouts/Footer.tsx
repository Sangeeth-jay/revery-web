import Logo from "@/assesst/revery.png";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";

export const Footer = () => (
  <footer className="flex items-center justify-center w-full h-fit border-t px-4 md:px-16 lg:px-32 py-8">
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="w-full flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start justify-around gap-4">
        <div>
          <Image src={Logo} alt="logo" width={198} />
          <div className="w-full flex flex-row justify-around items-center gap-1">
            <Link href="https://www.facebook.com/share/1FgnYDTjrQ/?mibextid=wwXIfr">
              <IoLogoFacebook className="text-4xl" />
            </Link>
            <Link href="https://www.instagram.com/revery.it">
              <PiInstagramLogoFill className="text-4xl" />
            </Link>
            <Link href="https://www.tiktok.com/@revery.technologies?_t=ZS-8yoYNXbx2f4&_r=1">
              <AiFillTikTok className="text-4xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start lg:items-start">
          <h1 className="font-bold">Company</h1>
          <Link href="/About" className="font-thin">About</Link>
          <Link href="/./#service" className="font-thin">Service</Link>
          <Link href="/works" className="font-thin">Works</Link>
        </div>
        <div className="flex flex-col items-center md:items-start lg:items-start">
          <h1 className="font-bold">Legal</h1>
          <Link href="/Privacy_Policy" className="font-thin">Privacy Policy</Link>
          <Link href="/Privacy_Policy" className="font-thin">Terms & Conditions</Link>
        </div>
      </div>
      <hr className="text-white w-full" />
      <p className="font-bold">
        &copy; Copyright {new Date().getFullYear()} Revery. All rights reserved.
      </p>
    </div>
  </footer>
);
