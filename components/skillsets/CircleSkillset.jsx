import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProgressCircle from "../progress/ProgressCircle";

const CircleSkillset = () => {
  const data = useContext(AppContext);

  return (
    <div className="grid grid-cols-3 gap-10">
      {data.languages.map((item, index) => (
        <ProgressCircle key={index} item={item} />
      ))}
    </div>
  );
};

export default CircleSkillset;
