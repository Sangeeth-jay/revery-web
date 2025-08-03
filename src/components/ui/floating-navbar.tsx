/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import revery from "@/assesst/logo-red.png";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-3/5  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pl-4 py-1.5  items-center justify-between space-x-4",
          className
        )}
      >
        <Image src={revery} alt="Revery" width={132} />
        <div className="flex items-center gap-2">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-[#0F072C] items-center flex space-x-1  dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="focus:outline-none cursor-pointer text-white text-md font-medium bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-sm px-5 py-2.5 me-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Contact us
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
