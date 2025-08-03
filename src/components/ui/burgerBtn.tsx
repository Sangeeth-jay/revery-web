import React from "react";
import { motion } from "motion/react";

interface BurgerBtnProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerBtn = ({ isOpen, setIsOpen }: BurgerBtnProps) => {
  const commonLine = "absolute w-8 h-[3px] bg-white rounded-sm";

  const line1Variants = {
    initial: { y: 0, rotate: 0 },
    open: { y: 10.5, rotate: 45 },
  };

  const line2Variants = {
    initial: { opacity: 1 },
    open: { opacity: 0 },
  };

  const line3Variants = {
    initial: { y: 0, rotate: 0 },
    open: { y: -10.5, rotate: -45 },
  };

  return (
    <>
      <motion.button 
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-6 bg-none border-none cursor-pointer">
        <motion.span
          animate={isOpen ? "open" : "initial"}
          variants={line1Variants}
          className={`${commonLine} top-0`}
        ></motion.span>
        <motion.span
          animate={isOpen ? "open" : "initial"}
          variants={line2Variants}
          className={`${commonLine} top-1/2 transform -translate-y-1/2`}
        ></motion.span>
        <motion.span
          animate={isOpen ? "open" : "initial"}
          variants={line3Variants}
          className={`${commonLine} bottom-0`}
        ></motion.span>
      </motion.button>
    </>
  );
};

export default BurgerBtn;
