"use client";
import React from "react";
import revery from "@/assesst/revery.png";
import Image from "next/image";
import BurgerBtn from "../ui/burgerBtn";
import { useState } from "react";

export const HeaderF = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className=" w-full bg-transparent flex flex-col items-center justify-center">
        <nav className="w-full flex flex-row-reverse items-center justify-between px-4 md:px-8 py-4 md:py-4  backdrop-blur-xs">
          <Image src={revery} alt="Revery" width={132} />
          <div>
            <BurgerBtn isOpen = {isOpen} setIsOpen={setIsOpen} />
          </div>
        </nav>

        {isOpen && (
          <div className=" relative z-50 w-full h-screen bg-white/5 backdrop-blur-sm text-white flex flex-col gap-8 items-center justify-center">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Service
            </a>
            <a href="#works" onClick={() => setIsOpen(false)}>
              Works
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white text-md font-medium bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-sm px-3 py-0.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Contact us
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderF;
