import React from "react";
import Link from "next/link";

const SideNav = () => {
  return (
    <nav className="w-[100%] text-slate-400 mt-[30px]">
      <div className="text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
        <Link href="/">Home</Link>
      </div>
      <div className="text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
        <Link href="/about">About</Link>
      </div>
      <div className="text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
        <Link href="/projects">Projects</Link>
      </div>
      <div className="text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
        <Link href="/blog">Blog</Link>
      </div>
      <div className="text-center py-[12px] hover:bg-teal-400 hover:text-gray-900 duration-300">
        <Link href="/contact">Contact</Link>
      </div>
      <div className="text-center py-[12px]">
        <Link href="/resume">
          <button className="bg-teal-400 outline-none text-white py-[10px] px-[25px] rounded-[8px]" href="/contact">
            Resume
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
