import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPostOne = ({ post }) => {
  return (
    <div>
      <div className="h-[230px] group relative overflow-hidden rounded-[12px]">
        <div className="bg-teal-400 w-[100%] h-[100%] absolute translate-y-[-100%] duration-300 opacity-80 group-hover:translate-y-[0] z-50"></div>
        <Image src={`/${post.frontmatter.cover_image}`} className="object-cover z-40" layout="fill" />
      </div>
      <div className="my-[15px] leading-none">
        <span className="text-teal-400 text-[14px]">{post.frontmatter.category}</span>
      </div>
      <Link href={`blog/${post.slug}`}>
        <h3 className="leading-none p-0 block text-xl line-clamp-1 text-slate-200 mb-[12px] cursor-pointer hover:text-slate-400">{post.frontmatter.title}</h3>
      </Link>
      <p className="text-slate-400 p-0 text-sm line-clamp-2 text-justify">{post.frontmatter.perex}</p>
    </div>
  );
};

export default BlogPostOne;
