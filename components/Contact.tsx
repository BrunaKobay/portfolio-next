import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-[600px]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="uppercase tracking-[10px] text-gray-800 text-2xl pb-4">
          Get In Touch
        </h3>
        <p className="text-gray-800 pt-4">
          Got a question or proposal, or just want to say hello?
        </p>
        <p className="text-gray-800 mb-10 ">
          Go ahead, my inbox is always open!
        </p>
        <a href="mailto:brunakobay@gmail.com" target="_blank">
          <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-purple-500 text-center font-medium border-2 border-purple-500 hover:bg-purple-500 hover:text-white">
            {/* <FaGithubAlt className="font-extrabold text-xl" /> */}
            <span className="px-2 py-4">SAY HELLO!</span>
          </button>
        </a>
      </div>
    </div>
  );
}
