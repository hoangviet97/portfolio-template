import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetailThree = ({ title, category, perex, date, cover_image, content }) => {
  return (
    <div className="px-[100px]">
      <header className="grid grid-cols-2">
        <div className="col-span-1 flex items-center">
          <div className="w-[85%]">
            <span className="text-teal-400">{category}</span>
            <h1 className="text-slate-200 mb-[15px]">{title}</h1>
            <p className="text-md text-gray-400">{perex}</p>
            <div>{date}</div>
          </div>
        </div>
        <div className="relative h-[75vh] mb-[30px] col-span-1">
          <Image src={`/${cover_image}`} className="w-[100%] object-cover" layout="fill" />
        </div>
      </header>
      <div className="text-gray-400 w-[70%] mx-auto mt-[60px]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetailThree;
