import React, { useState } from "react";
import Link from "next/link";
import Burger from "./Burger";

const FullNav = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger click={setActive} />
      <div className={`${active ? "translate-y-0" : "translate-y-[-100%]"} duration-300 lg:hidden dark:bg-gray-800 fixed top-0 left-0 right-0 flex items-center justify-center bottom-0 z-[80]`}>
        <nav className="">
          <div className="text-4xl dark:text-slate-200 text-gray-800 text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
            <Link href="/">Home</Link>
          </div>
          <div className="text-4xl dark:text-slate-200 text-gray-800 text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
            <Link href="/about">About</Link>
          </div>
          <div className="text-4xl dark:text-slate-200 text-gray-800 text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="text-4xl dark:text-slate-200 text-gray-800 text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="text-4xl dark:text-slate-200 text-gray-800 text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="text-center py-[12px]">
            <Link href="/resume">
              <button className="bg-teal-400 text-white py-[10px] px-[25px] rounded-[8px]" href="/contact">
                Resume
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default FullNav;
