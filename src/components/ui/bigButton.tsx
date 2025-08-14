import React from "react";
import { motion, useAnimation } from "motion/react";
import { IoIosCall } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";

const shakeAnimation = {
  rotate: [0, -10, 10, -10, 10, 0],
  transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
};

const shakeAnimation2 = {
  x: [0, -5, 5, -5, 5, 0],
  transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
};

const shakeAnimation3 = {
  y: [0, -1, 1, -1, 1, 0],
  x: [0, -1, 1, -1, 1, 0],
  transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
};

const BigButton = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();

  return (
    <>
      <motion.button
        onClick={() => {
          window.open("https://wa.me/+94725050191", "_blank");
        }}
        className="group bg-[#FF0303] text-3xl font-bold text-white  cursor-pointer w-fit px-8 py-4 flex flex-row items-center gap-2"
        onHoverStart={() => {
          controls.start(shakeAnimation);
          controls2.start(shakeAnimation2);
        }}
        onHoverEnd={() => {
          controls.stop();
          controls2.stop();
        }}
        whileHover={shakeAnimation3}
      >
        <motion.span animate={controls}>
          <IoIosCall />
        </motion.span>
        <motion.h1>Contact Us</motion.h1>
        <motion.span animate={controls2}>
          <MdArrowRightAlt />
        </motion.span>
      </motion.button>
    </>
  );
};

export default BigButton;
