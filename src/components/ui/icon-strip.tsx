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

const items = [
  Js,
  Node,
  ReactLogo,
  AWS,
  Figma,
  GA4,
  GAdds,
  Flutter,
  Meta,
  MySQL,
  Sass,
  WordPress,
];

const iconStrip = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <p className="text-[#482FA3] text-lg font-semibold">We’re experts in</p>
        <Marquee speed={30} gradient={false}>
          <div className="w-full flex flex-row items-center justify-around gap-9 ">
            {items.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="icon"
                width={100}
                height={100}
                className="w-12 h-12"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default iconStrip;
