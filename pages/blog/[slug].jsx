import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Footer from "../../components/footer/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlogDetailOne from "../../components/blog/blogDetail/BlogDetailOne";
import BlogDetailTwo from "../../components/blog/blogDetail/BlogDetailTwo";
import BlogDetailThree from "../../components/blog/blogDetail/BlogDetailThree";

const BlogDetail = ({ frontmatter: { title, category, perex, date, cover_image }, slug, content }) => {
  console.log(content);
  return (
    <div className="dark:bg-gray-800 lg:ml-[150px] pt-[60px] min-h-[100vh]">
      <BlogDetailTwo title={title} category={category} perex={perex} date={date} cover_image={cover_image} content={content} />
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  console.log(paths);

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  console.log(slug);
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content
    }
  };
};

export default BlogDetail;
