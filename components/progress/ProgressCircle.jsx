import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ item: { title, percent } }) => {
  return (
    <div className="flex flex-col items-center max-w-[150px]">
      <CircularProgressbar styles={{ path: { stroke: "#2dd4bf" }, trail: { stroke: "white" }, text: { fill: "white" } }} value={percent} text={`${percent}%`} />
      <div className="text-white text-xl py-[20px]">{title}</div>
    </div>
  );
};

export default ProgressCircle;
