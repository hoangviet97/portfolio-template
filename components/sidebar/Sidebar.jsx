import React from "react";
import SideNav from "../navigation/SideNav";
import Link from "next/link";
import Switch from "../switch/Switch";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex bg-gray-900 w-[150px] h-[100vh] fixed flex-col">
      <Link href="/">
        <div className="bg-gray-700 w-[100%] h-[200px] flex justify-center items-center cursor-pointer hover:bg-gray-600">
          <div className="text-teal-400 text-6xl font-bold">JD.</div>
        </div>
      </Link>
      <SideNav />
    </aside>
  );
};

export default Sidebar;
