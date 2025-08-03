import { FC } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Boxes } from "../ui/background-boxes";
import IconStrip from "../ui/icon-strip";
import { cn } from "@/lib/utils";
import { Header } from "./Header";
import Hero2 from "./Hero2";
import { HeaderF } from "./HeaderF";
import HeaderM from "./HeaderM";

type HeroProps = unknown;

const Hero: FC<HeroProps> = () => {
  return (
    <>
      {" "}
      <nav className="">
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="hidden lg:block">
          <HeaderF />
        </div>
      </nav>
      <section className="h-screen relative w-full overflow-hidden">
        <Boxes />
        <div className="sticky top-0 lg:hidden">
          <HeaderM />
        </div>
        <div className="h-screen flex flex-col items-center justify-center px-4 md:px-16 lg:px-32 ">
          <div className="flex flex-col gap-3">
            <p className={cn("text-4xl md:text-5xl lg:text-6xl font-bold text-center relative z-20")}>
              Crafting Unique Digital Experiences and Driving Your Business{" "}
              <br />
              <span className="bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">
                Growth
              </span>
            </p>
            <h1 className="md:text-md lg:text-lg text-center relative z-20">
              Revery provides everything from expert advice to dedicated
              staffing, taking your <br /> business from idea to implementation.
            </h1>
            <RiArrowDownDoubleLine className="text-6xl self-center relative z-20" />
          </div>
          <IconStrip />
        </div>
      </section>
      <Hero2 />
    </>
  );
};

export default Hero;
