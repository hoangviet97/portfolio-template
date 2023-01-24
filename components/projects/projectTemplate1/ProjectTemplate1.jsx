import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import ProjectTemplate1Card from "./ProjectTemplate1Card";

const ProjectTemplate1 = () => {
  const data = useContext(AppContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {data.projects.map((project) => (
        <ProjectTemplate1Card project={project} />
      ))}
    </div>
  );
};

export default ProjectTemplate1;
