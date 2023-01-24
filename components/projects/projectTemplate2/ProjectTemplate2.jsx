import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import ProjectTemplate2Card from "./ProjectTemplate2Card";

const ProjectTemplate2 = () => {
  const data = useContext(AppContext);
  const [activeButton, setActiveButton] = useState(0);
  const [selected, setSelected] = useState("");

  return (
    <div>
      <header className="h-[200px] w-[100%] flex items-center justify-center">
        <h1 className="text-6xl text-gray-800 dark:text-slate-200">
          works<span className="text-teal-400">.</span>
        </h1>
      </header>
      <div className="mb-[50px]">
        <div className="flex justify-center gap-[30px]">
          {data.project_categories.map((item, index) => (
            <button key={index} className="outline-none" onClick={() => setSelected(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="up-anim">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-[60px]">
          {data.projects
            .filter((item) => item.category === selected)
            .map((item, index) => (
              <ProjectTemplate2Card key={index} project={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate2;
