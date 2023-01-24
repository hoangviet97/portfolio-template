import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProgressBar from "../progress/ProgressBar";
const BarSkillset = () => {
  const data = useContext(AppContext);

  return (
    <div>
      {data.skills.map((item, index) => (
        <ProgressBar key={index} item={item} />
      ))}
    </div>
  );
};

export default BarSkillset;
