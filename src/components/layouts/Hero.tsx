import { FC } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Boxes } from "../ui/background-boxes";
import IconStrip from "../ui/icon-strip"
import { cn } from "@/lib/utils";
import { Header } from "./Header";

type HeroProps = unknown;



const Hero: FC<HeroProps> = () => {
  return (
    <>
      {" "}
      <section className="h-screen relative w-full overflow-hidden">
        <Boxes />
        <Header />
        <div className="h-screen flex flex-col items-center justify-center px-32">
          <div className="flex flex-col gap-4">
            <p className={cn("text-7xl font-bold text-center relative z-20")}>
              Crafting Unique Digital Experiences and Driving Your Business{" "}
              <br />
              <span className="bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">
                Growth
              </span>
            </p>
            <h1 className="text-xl text-center relative z-20">
              Revery provides everything from expert advice to dedicated
              staffing, taking your <br /> business from idea to implementation.
            </h1>
            <RiArrowDownDoubleLine
              className="text-8xl self-center relative z-20"
            />
          </div>
          <IconStrip/>
        </div>
      </section>
    </>
  );
};

export default Hero;
