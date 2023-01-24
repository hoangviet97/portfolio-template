import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-[100vh] w-[100%] px-[60px] flex items-center">
      <div>
        <h2 className="leading-none text-xl lg:text-2xl text-teal-400 font-medium mb-[20px]">Hi, my name is</h2>
        <h1 className="home-text text-[60px] lg:text-[80px] text-gray-800 dark:text-slate-200 leading-2 font-medium">Edward Doe.</h1>
        <h3 className="home-text2 text-[60px] lg:text-[80px] text-gray-600 dark:text-slate-400 leading-none font-medium mb-[30px]">Fullstack developer</h3>
        <p className="text-xl mt-[10px] max-w-[520px] dark:text-slate-400 text-[15px] lg:text-[17px]">I'm an independent full-stack developer from Czech Republic specializing on web development. I craft unique and scalable products with solid user experience.</p>
        <Link href="/contact">
          <button className="border-2 border-teal-400 text-teal-400 py-[10px] px-[30px] mt-[40px] rounded-[12px] hover:bg-teal-400 hover:text-white">Let's talk</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
