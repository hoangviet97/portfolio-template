import React from "react";
import Image from "next/image";

const ProjectTemplate1Card = ({ project }) => {
  return (
    <div className="bg-gray-300 h-[280px] relative group">
      <div className="absolute bg-gray-800 opacity-50 group-hover:opacity-0  bg-slate-200 w-[100%] h-[100%] z-30">{project.title}</div>
      <Image src={project.images[0]} className="object-cover w-[100%] duration-300 group-hover:scale-105 z-20" layout="fill" />
    </div>
  );
};

export default ProjectTemplate1Card;
