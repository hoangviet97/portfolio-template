import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Switch = () => {
  const setMode = () => {};

  return (
    <button onClick={() => setMode()} id="theme-toggle" type="button" className="rounded-full outline-none bg-slate-200 w-[20px] h-[20px]">
      <FontAwesomeIcon icon={faMoon} />
    </button>
  );
};

export default Switch;
