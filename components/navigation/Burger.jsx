import React, { useState } from "react";

const Burger = ({ click }) => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  const setActions = () => {
    setIsOpen(!isOpen);
    click(!isOpen);
  };

  return (
    <div className="absolute visible lg:invisible z-[90]">
      <button className="fixed right-[20px] top-[20px] flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group" onClick={() => setActions()}>
        <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
      </button>
    </div>
  );
};

export default Burger;
