import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
type Props = {};

export default function ({}: Props) {
  return (
    <div className="min-h-screen relative flex flex-col text-left justify-center items-center my-20">
      <div className="w-full absolute top-[30%] bg-violet-600/30 left-0 h-[500px] -skew-y-12 z-0" />
      <div className="flex flex-col items-start">
        <h3 className="uppercase tracking-[20px] text-gray-700 text-2xl mb-28">
          Projects
        </h3>
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 mx-2 mb-6">
        <div className="flex flex-col justify-between items-center rounded-lg bg-white border border-gray-200 shadow-md  hover:-translate-y-4 transition ease-in-out duration-150 z-10 w-96 h-[476px]">
          <img
            src="https://airbnblover.com/wp-content/uploads/2017/02/airbnb-refugees-1.png"
            className="rounded-t-lg h-48 w-96"
            alt="velt logo"
          />
          <div className="p-5 text-center space-y-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              Study Case: Airbnb clone
            </h5>
            <p className="mb-3 font-normal text-gray-600 text-justify pb-4">
              A simple Airbnb project using ReactJS, Tailwind CSS, Mapbox,
              Calendar and Date Picker. Type on the search box to look for a
              place and a date.
            </p>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Nextjs
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-row align-center space-x-8 p-2">
            <a
              href="https://github.com/BrunaKobay/airbnb-clone"
              target="_blank"
            >
              <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-white text-center font-medium bg-purple-500 hover:bg-purple-700">
                <FaGithubAlt className="font-extrabold text-xl" />
                <span className="pb-0.5 pl-1">github</span>
              </button>
            </a>
            <a href="https://airbnb-clone-wine-rho.vercel.app" target="_blank">
              <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-white text-center font-medium bg-purple-500 hover:bg-purple-700">
                <FiExternalLink className="font-extrabold text-xl" />
                <span className="pb-0.5 pl-1">view site</span>
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center rounded-lg bg-white border border-gray-200 shadow-md  hover:-translate-y-4 transition ease-in-out duration-150 z-10 w-96 h-[476px]">
          <img
            src="/velt-logo.png"
            className="rounded-t-lg h-48 w-96"
            alt="airbnb logo"
          />
          <div className="p-5 text-center space-y-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              Project: Velt.
            </h5>
            <p className="mb-3 font-normal text-gray-600 text-justify pb-4">
              Managing people in organizations is not an easy task. The Velt
              platform was developed with the purpose of simplifying this
              responsibility in organizations.
            </p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Nextjs
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Tailwind CSS
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Firebase
            </span>
          </div>
          <div className="flex flex-row align-center space-x-8 p-2">
            <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-gray-600 text-center font-medium border border-purple-500 bg-white ">
              <span className="pb-0.5 pl-1">in progress</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center rounded-lg bg-white border border-gray-200 shadow-md  hover:-translate-y-4 transition ease-in-out duration-150 z-10 w-96 h-[476px]">
          <div>
            <img
              src="/cats-logo.png"
              className="rounded-t-lg h-48 w-96 object-cover"
              alt="cats logo"
            />
          </div>

          <div className="p-5 text-center space-y-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              Project: Cat's House.
            </h5>
            <p className="mb-3 font-normal text-gray-600 text-justify pb-4">
              A website created with the intention of helping to organize a
              hotel house for daily rent. It is possible to check the days
              available for rent, packages and prices, reservations and more.
            </p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Nextjs
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Tailwind CSS
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Firebase
            </span>
          </div>
          <div className="flex flex-row align-center space-x-8 p-4">
            <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-gray-600 text-center font-medium border border-purple-500 bg-white ">
              <span className="pb-0.5 pl-1">in progress</span>
            </button>
            <a
              href="https://www.figma.com/file/gzZp0mi79GT5GdSBneUXSe/Cat's-House?node-id=0%3A1&t=ohHysaAYG198LHwt-1"
              target="_blank"
            >
              <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-white text-center font-medium bg-purple-500 hover:bg-purple-700">
                <FiExternalLink className="font-extrabold text-xl" />
                <span className="pb-0.5 pl-1">draft</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
