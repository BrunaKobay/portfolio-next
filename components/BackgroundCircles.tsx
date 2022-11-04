import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1, 2],
        opacity: [0.6, 0.8, 0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute rounded-full border-2 border-purple-600 h-[750px] w-[750px] mt-52 animate-pulse" />
      <div className="absolute rounded-full border-2 border-gray-600 h-[550px] w-[550px] mt-52 " />
      <div className="absolute rounded-full border border-purple-600 h-[250px] w-[250px] mt-52 animate-ping" />
    </motion.div>
  );
}
