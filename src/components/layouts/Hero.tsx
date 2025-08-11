"use client";
import { FC } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Boxes } from "../ui/background-boxes";
import IconStrip from "../ui/icon-strip";
import { cn } from "@/lib/utils";
import { Header } from "./Header";
import Hero2 from "./Hero2";
import { HeaderF } from "./HeaderF";
import HeaderM from "./HeaderM";
import { motion } from "motion/react";

type HeroProps = unknown;

const Hero: FC<HeroProps> = () => {
  const words = [
    "Crafting",
    "Unique",
    "Digital",
    "Experiences",
    "and",
    "Driving",
    "Your",
    "Business",
  ];

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
      <section id="home" className="h-screen relative w-full overflow-hidden">
        <Boxes />
        <div className="sticky top-0 lg:hidden">
          <HeaderM />
        </div>
        <div className="h-screen flex flex-col items-center justify-center px-4 md:px-16 lg:px-32 ">
          <div className="flex flex-col gap-3">
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold text-center relative z-20"
              )}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}

              <br />
              <motion.span
                className="inline-block mt-1 text-transparent bg-clip-text moving-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: words.length * 0.2, duration: 0.5 }}
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #c2410c, #2563eb, #c2410c)",
                }}
              >
                Growth
              </motion.span>
            </h1>
            <motion.h1
              className="md:text-md lg:text-lg text-center relative z-20"
              initial={{ opacity: 0, y: (-20) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: words.length * 0.2, duration: 0.5 }}
            >
              Revery provides everything from expert advice to dedicated
              staffing, taking your <br /> business from idea to implementation.
            </motion.h1>
            <motion.div
              className="text-6xl self-center relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: words.length * 0.2, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <RiArrowDownDoubleLine />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: words.length * 0.2, duration: 0.5 }}
          >
            <IconStrip />
          </motion.div>
        </div>
      </section>
      <Hero2 />
    </>
  );
};

export default Hero;
