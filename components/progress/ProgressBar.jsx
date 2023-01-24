import React, { useState } from "react";

const ProgressBar = ({ item: { title, percent } }) => {
  const [isRunninng, setIsRunning] = useState(false);
  return (
    <div className="mb-[15px]">
      <div className="flex justify-between">
        <div className="text-slate-200 mb-[5px]">{title}</div>
        <span className="text-slate-200">{percent}%</span>
      </div>
      <div className="w-[100%] h-[10px] rounded-[20px] overflow-hidden bg-slate-300 relative">
        <div style={{ width: `${percent}%` }} className={`h-[100%] bg-teal-400 duration-300`}></div>
        <button onClick={() => setIsRunning(true)}>set</button>
      </div>
    </div>
  );
};

export default ProgressBar;
