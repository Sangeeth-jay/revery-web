"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Js from "../../assesst/dev-logo/js-official_svgrepo.com.png";
import Node from "../../assesst/dev-logo/nodejs-icon_svgrepo.com.png";
import ReactLogo from "../../assesst/dev-logo/reactjs_svgrepo.com.png";
import AWS from "../../assesst/dev-logo/aws_svgrepo.com.png";
import Figma from "../../assesst/dev-logo/figma_svgrepo.com.png";
import GA4 from "../../assesst/dev-logo/google-analytics_svgrepo.com.png";
import GAdds from "../../assesst/dev-logo/google-ads_svgrepo.com.png";
import Flutter from "../../assesst/dev-logo/flutter_svgrepo.com.png";
import Meta from "../../assesst/dev-logo/meta_svgrepo.com.png";
import MySQL from "../../assesst/dev-logo/mysql_svgrepo.com.png";
import Sass from "../../assesst/dev-logo/sass_svgrepo.com.png";
import WordPress from "../../assesst/dev-logo/wordpress_svgrepo.com.png";
// import Nextjs from "../../assesst/dev-logo/nextjs-icon-svgrepo-com.svg";

// const items = [
//   Js,
//   Node,
//   ReactLogo,
//   AWS,
//   Figma,
//   GA4,
//   GAdds,
//   Flutter,
//   Meta,
//   MySQL,
//   Sass,
//   WordPress,
// ];

const iconStrip = () => {
  return (
    <>
      <div className="relative z-20 flex flex-col gap-4 items-center justify-center w-fit">
        <p className="text-[#482FA3] text-lg font-semibold">We’re experts in</p>
        <div className="flex flex-wrap gap-4">
          <Marquee>
            {/* {items.map((item, index) => (
              <div key={index} className="w-18 h-18">
                <Image src={item} alt="icon" />
              </div>
            ))} */}
            <div className="flex w-fit gap-8">
              <div className="w-18 h-18">
                <Image src={Js} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={Node} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={ReactLogo} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={AWS} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={Figma} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={GA4} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={GAdds} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={Flutter} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={Meta} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={MySQL} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={Sass} alt="icon" />
              </div>
              <div className="w-18 h-18">
                <Image src={WordPress} alt="icon" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default iconStrip;
