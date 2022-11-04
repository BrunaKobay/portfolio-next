import React from "react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="min-h-screen flex flex-col text-left justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="uppercase tracking-[20px] text-gray-700 text-2xl">
          Skills
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-400 py-2">
          Always learning and improving!
        </h3>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-20">
        <div className="group relative flex cursor-pointer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            className="rounded-full border border-gray-500 object-cover w-24 h-24 lg:w-32 lg:h-32 p-2 group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-purple-600 h-24 w-24 lg:w-32 lg:h-32 p-2 rounded-full">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            className="rounded-full border border-gray-500 object-cover w-24 h-24 lg:w-32 lg:h-32 p-2 group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-purple-600 h-24 w-24 lg:w-32 lg:h-32 p-2 rounded-full">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            className="rounded-full border border-gray-500 object-cover w-24 h-24 lg:w-32 lg:h-32 p-2 group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-purple-600 h-24 w-24 lg:w-32 lg:h-32 p-2 rounded-full">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            className="rounded-full border border-gray-500 object-cover w-24 h-24 lg:w-32 lg:h-32 p-2 group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-purple-600 h-24 w-24 lg:w-32 lg:h-32 p-2 rounded-full">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
