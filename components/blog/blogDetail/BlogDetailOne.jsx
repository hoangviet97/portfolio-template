import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetailOne = ({ title, perex, date, cover_image, content }) => {
  return (
    <div className="px-[160px]">
      <header className="h-[150px] flex flex-col text-center justify-center">
        <h1 className="dark:text-slate-200">{title}</h1>
        <p>{perex}</p>
      </header>
      <div className="relative h-[400px] mb-[30px]">
        <Image src={`/${cover_image}`} className="w-[100%] object-cover" layout="fill" />
      </div>
      <div className="text-slate-400">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetailOne;
