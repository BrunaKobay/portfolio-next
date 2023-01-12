import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithubAlt, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { GiCat } from "react-icons/gi";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Bruna",
      "A Front-end Developer",
      "Girl-that-loves-coffee.tsx",
      "</>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-[979px] flex flex-col items-center justify-center text-center overflow-hidden z-0">
      <BackgroundCircles />
      <GiCat size={100} className="mb-6" />
      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="pt-8 text-2xl font-bold">
          <span>{text}</span>
          <Cursor cursorColor="purple" />
        </h1>
        <p className="pt-12 text-gray-500 max-w-[80%] md:max-w-[60%] lg:max-w-[40%] text-lg">
          I'm a front-end developer specializing in building exceptional digital
          experiences. Currently, I'm focused on building responsive front-end
          web applications while learning back-end technologies.
        </p>
        <span className="flex flex-row items-center space-x-10 pt-16 text-purple-800">
          <div className="group cursor-pointer relative inline-block border-gray-400 text-center">
            <a href="https://www.linkedin.com/in/brunakobay/" target="_blank">
              <FaLinkedin size={30} />
            </a>
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg absolute z-10 group-hover:opacity-100 -left-10 -top-10 px-1 pointer-events-none p-2">
              LinkedIn
            </div>
          </div>

          <div className="group cursor-pointer relative inline-block border-gray-400 text-center">
            <a href="https://github.com/BrunaKobay" target="_blank">
              <FaGithubAlt size={34} />
            </a>
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg absolute z-10 group-hover:opacity-100 -left-10 -top-10 px-1 pointer-events-none p-2">
              Github
            </div>
          </div>

          <div className="group cursor-pointer relative inline-block border-gray-400 text-center">
            <a download href="Resume Bruna Kobay.pdf" target="_blank">
              <FaCloudDownloadAlt size={34} />
            </a>
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg absolute z-10 group-hover:opacity-100 -left-10 -top-10 px-1 pointer-events-none p-2">
              Download CV
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
