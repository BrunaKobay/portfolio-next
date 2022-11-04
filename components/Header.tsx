import Link from "next/link";
import { useState } from "react";
import { MdClose, MdOutlineMail, MdOutlineMenu } from "react-icons/md";

type Props = {};

export default function Header({}: Props) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed w-full top-0 p-5 z-20 bg-white">
      <div className="max-w-7xl flex items-center justify-between mx-auto">
        <div>
          <h1 className="text-2xl font-serif">BK</h1>
        </div>
        <div className="flex">
          <ul className="hidden sm:inline-flex items-center justify-between space-x-10 font-medium text-gray-700">
            <Link href="/">
              <li className="hover:underline hover:decoration-2 hover:decoration-wavy hover:decoration-violet-600 hover:underline-offset-4 cursor-pointer">
                home
              </li>
            </Link>
            <Link href="/#projects">
              <li className="hover:underline hover:decoration-2 hover:decoration-wavy hover:decoration-violet-600 hover:underline-offset-4 cursor-pointer">
                projects
              </li>
            </Link>
            <Link href="#skills">
              <li className="hover:underline hover:decoration-2 hover:decoration-wavy hover:decoration-violet-600 hover:underline-offset-4 cursor-pointer">
                skills
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden sm:flex">
          <Link href="#contact">
            <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-white text-center font-medium bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-200">
              <MdOutlineMail className="font-extrabold text-xl" />
              <span className="pb-0.5 pl-1">contact</span>
            </button>
          </Link>
        </div>
        {/* mobile menu */}
        <div onClick={handleNav} className="flex sm:hidden">
          <MdOutlineMenu size={25} className="cursor-pointer" />
          <div
            className={
              nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed left-0 top-0 w-[65%] h-screen bg-gray-50 p-10 ease-in duration-500"
                  : "fixed left-[-100%]"
              }
            >
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-serif">BK</h1>
                <div onClick={handleNav} className="cursor-pointer">
                  <MdClose size={20} />
                </div>
              </div>
              <div className="mt-16">
                <ul className="flex flex-col items-center justify-between space-y-8 font-medium text-gray-700">
                  <Link href="/">
                    <li
                      onClick={() => setNav(false)}
                      className="hover:underline hover:decoration-2 hover:decoration-wavy hover:decoration-violet-600 hover:underline-offset-4 cursor-pointer"
                    >
                      home
                    </li>
                  </Link>
                  <Link href="#projects">
                    <li
                      onClick={() => setNav(false)}
                      className="hover:underline hover:decoration-2 hover:decoration-wavy hover:decoration-violet-600 hover:underline-offset-4 cursor-pointer"
                    >
                      projects
                    </li>
                  </Link>
                  <Link href="#skills">
                    <li
                      onClick={() => setNav(false)}
                      className="hover:underline hover:decoration-2 hover:decoration-wavy hover:decoration-violet-600 hover:underline-offset-4 cursor-pointer"
                    >
                      skills
                    </li>
                  </Link>
                  <Link href="#contact">
                    <li
                      onClick={() => setNav(false)}
                      className="hover:underline hover:decoration-2 hover:decoration-wavy hover:decoration-violet-600 hover:underline-offset-4 cursor-pointer"
                    >
                      contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
