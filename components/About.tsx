import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col text-left justify-center items-center bg-purple-100">
      <div className="flex flex-col justify-center items-center">
        <h3 className="uppercase tracking-[20px] text-gray-700 text-2xl">
          About Me
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-400 py-2">
          Always learning and improving!
        </h3>
      </div>

      <div className="flex justify-center items-center p-2 md:mx-20 md:p-6 lg:mx-40 lg:p-10">
        <div className="flex flex-col xl:basis-1/2 p-6 text-gray-800 text-justify">
          <p className="p-4">
            Hi! My name is Bruna and I like to create beautiful, cool and solid
            things that live on the internet. My interest in front-end started
            in 2022 when my friend asked me to help him with a freelance job and
            I decided to give it a try! As it turned out, I liked it a lot and
            decided to keep working with him and learning more. Check out some
            of my work in the{" "}
            <Link href="/#projects" className="text-purple-500 font-bold">
              Projects{" "}
            </Link>
            section.
          </p>
          <p className="p-4">
            I'm{" "}
            <span className="underline underline-offset-4 decoration-purple-400 decoration-4">
              open to Job opportunities
            </span>{" "}
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
          <p className="px-4">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 list-disc gap-2 font-serif p-6 ml-10 text-sm marker:text-purple-600">
            <div>
              <li>JavaScript </li>
              <li>TypeScript</li>
              <li>React</li>
            </div>
            <div>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
            </div>
          </ul>
        </div>
        <div className="hidden xl:flex xl:basis-1/3 justify-center items-center hover:-translate-y-6 duration-150">
          <div className="absolute border-4 border-purple-500 rounded-md h-60 w-60 translate-x-6 translate-y-6 " />
          <div className="relative grayscale hover:grayscale-0 transition duration-100">
            <Image
              src="/bruna.jpg"
              alt="picture of Bruna"
              width={250}
              height={250}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
