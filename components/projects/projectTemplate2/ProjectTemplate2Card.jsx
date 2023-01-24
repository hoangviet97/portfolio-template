import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../../modal/Modal";

const ProjectTemplate1Card = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="shadow-lg rounded-[12px] overflow-hidden cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="bg-gray-300 h-[200px] relative group">
          <Image src={project.images[0]} className="object-cover w-[100%] duration-300 group-hover:scale-105" layout="fill" />
        </div>
        <div className="bg-gray-900 p-[30px]">
          <h3 className="text-lg p-0 text-slate-200 font-bold">{project.title}</h3>
          <a href="" className="text-teal-400">
            app.greenfield.com
          </a>
        </div>
      </div>
      <Modal open={isOpen} close={close} project={project} />
    </>
  );
};

export default ProjectTemplate1Card;
