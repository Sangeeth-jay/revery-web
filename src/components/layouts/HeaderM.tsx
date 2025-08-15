"use client";
import React from "react";
import revery from "@/assesst/revery.png";
import Image from "next/image";
import BurgerBtn from "../ui/burgerBtn";
import { useState } from "react";
import Link from "next/link";

export const HeaderM = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className=" w-full bg-transparent flex flex-col items-center justify-center">
        <nav className="w-full z-50 flex flex-row-reverse items-center justify-between px-4 md:px-8 py-4 md:py-4  backdrop-blur-xs">
          <Image src={revery} alt="Revery" width={108} />
          <div>
            <BurgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </nav>

        {isOpen && (
          <div
            className={`fixed inset-0 z-40 bg-white/10 backdrop-blur-md text-white text-4xl flex flex-col gap-8 items-center justify-center transform transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-full pointer-events-none"
            }`}
          >
            <Link href="#home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <hr className="text-white w-2/3" />
            <Link href="#service" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <hr className="text-white w-2/3" />
            <Link href="#works" onClick={() => setIsOpen(false)}>
              Works
            </Link>
            <hr className="text-white w-2/3" />
            <Link href="/About" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <hr className="text-white w-2/3" />
            <button
              type="button"
              onClick={() =>{
                window.open("https://wa.me/+94725050191", "_blank");
                setIsOpen(false)}}
              className="text-white text-sm font-thin w-2/3 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-sm px-6 py-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderM;
