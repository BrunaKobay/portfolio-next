import React from "react";
type Props = {};

export default function ({}: Props) {
  const projects = [1, 2, 3];
  return (
    <div className="min-h-screen relative flex flex-col text-left justify-center items-center">
      <div className="w-full absolute top-[30%] bg-violet-600/30 left-0 h-[500px] -skew-y-12 z-0" />
      <div className="flex flex-col items-start">
        <h3 className="uppercase tracking-[20px] text-gray-700 text-2xl mb-28">
          Projects
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mx-2 mb-6">
        <div className="flex flex-col justify-center items-center max-w-sm rounded-lg bg-white border border-gray-200 shadow-md  hover:-translate-y-4 transition ease-in-out duration-150 z-10">
          <img
            src="https://www.meon.com.br/source/files/originals/Netflix-593571.jpg"
            className="rounded-t-lg"
          />
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              Study Case: Netflix clone
            </h5>
            <p className="mb-3 font-normal text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor
              excepturi accusamus consectetur, officia assumenda corporis ad
              quasi delectus aspernatur. Tempore beatae quod sapiente molestiae
              ullam modi, et dolorem soluta.
            </p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Nextjs
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              TypeScript
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm rounded-lg bg-white border border-gray-200 shadow-md  hover:-translate-y-4 transition ease-in-out duration-150 z-10">
          <img
            src="https://www.meon.com.br/source/files/originals/Netflix-593571.jpg"
            className="rounded-t-lg"
          />
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              Study Case: Netflix clone
            </h5>
            <p className="mb-3 font-normal text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor
              excepturi accusamus consectetur, officia assumenda corporis ad
              quasi delectus aspernatur. Tempore beatae quod sapiente molestiae
              ullam modi, et dolorem soluta.
            </p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Nextjs
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              TypeScript
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm rounded-lg bg-white border border-gray-200 shadow-md  hover:-translate-y-4 transition ease-in-out duration-150 z-10">
          <img
            src="https://www.meon.com.br/source/files/originals/Netflix-593571.jpg"
            className="rounded-t-lg"
          />
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              Study Case: Netflix clone
            </h5>
            <p className="mb-3 font-normal text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor
              excepturi accusamus consectetur, officia assumenda corporis ad
              quasi delectus aspernatur. Tempore beatae quod sapiente molestiae
              ullam modi, et dolorem soluta.
            </p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              Nextjs
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
