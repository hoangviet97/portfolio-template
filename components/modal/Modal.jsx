import React from "react";
import Image from "next/image";
import Tag from "../tags/Tag";

const Modal = ({ open, close, project }) => {
  if (!open) return null;
  return (
    <>
      <div onClick={() => close()} className="fixed w-[100%] h-[100vh] opacity-90 top-0 left-0 bg-slate-600 z-[95] overflow-hidden"></div>
      <div className="w-[70%] max-h-[90vh] bg-gray-800 pb-[30px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] rounded-[12px] px-[60px] overflow-y-scroll shadow-lg">
        <header className="text-center text-3xl py-[30px] font-bold text-slate-200">{project.title}</header>
        <div className="relative h-[400px] rounded-[12px] overflow-hidden">
          <Image src={project.images[0]} className="object-cover" layout="fill" />
        </div>
        <div className="grid grid-cols-5 gap-[60px] mt-[30px]">
          <div className="col-span-3 text-slate-400">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi minima in consequuntur tempora laudantium, nostrum natus molestiae quia quos blanditiis reprehenderit pariatur molestias eligendi accusantium eum magni atque sunt fugit?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi minima in consequuntur tempora laudantium, nostrum natus molestiae quia quos blanditiis reprehenderit pariatur molestias eligendi accusantium eum magni atque sunt fugit?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi minima in consequuntur tempora laudantium, nostrum natus molestiae quia quos blanditiis reprehenderit pariatur molestias eligendi accusantium eum magni atque sunt fugit?</p>
          </div>
          <div className="col-span-2 flex justify-start">
            <div>
              <div className="mb-[20px]">
                <h3 className="text-teal-400 font-bold mb-1">Project</h3>
              </div>
              <div className="mb-[20px]">
                <h3 className="text-teal-400 font-bold mb-1">Technologies</h3>
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((item) => (
                    <Tag item={item} />
                  ))}
                </div>
              </div>
              <div className="mb-[20px]">
                <h3 className="text-teal-400 font-bold mb-1">Link</h3>
                <a href={project.url} className="text-slate-200">
                  www.envato.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
