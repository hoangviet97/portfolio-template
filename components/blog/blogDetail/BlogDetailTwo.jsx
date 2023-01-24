import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetailTwo = ({ title, category, perex, date, cover_image, content }) => {
  return (
    <div className="px-[100px]">
      <header className="flex justify-center mb-[20px]">
        <div className="w-[70%] text-center">
          <span className="text-teal-400">{category}</span>
          <h1 className="text-slate-200 mb-[15px]">{title}</h1>
          <div>{date}</div>
        </div>
      </header>
      <div className="relative h-[70vh] mb-[30px]">
        <Image src={`/${cover_image}`} className="w-[100%] object-cover" layout="fill" />
      </div>
      <div className="text-gray-400 w-[70%] mx-auto mt-[60px]">
        <p className="text-md text-gray-400 font-bold mb-[15px]">{perex}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetailTwo;
