import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import _ from "lodash";
import BlogList from "../../components/blog/blogList/BlogList";
import BlogPostOne from "../../components/blog/blogPost/BlogPostOne";
import Footer from "../../components/footer/Footer";

const index = ({ posts }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFilteredData(posts);
    const res = _.countBy(posts, function (data) {
      return data.frontmatter.category;
    });

    const entries = Object.entries(res).map((item) => ({ category: item[0], count: item[1] }));

    setCategories(entries);
  }, [posts]);

  const filterCategory = (category) => {
    if (category === "*") {
      setFilteredData(posts);
    } else {
      const pom = posts.filter((item) => item.frontmatter.category === category);
      setFilteredData(pom);
    }
  };

  return (
    <div className="min-h-[100vh] px-[60px] bg-gray-800 lg:ml-[150px]">
      <header className="h-[200px] w-[100%] flex items-center">
        <h1 className="text-6xl text-slate-200">
          blog<span className="text-teal-400">.</span>
        </h1>
      </header>
      <div className="grid grid-col-1 lg:grid-cols-5 gap-[30px] min-h-[100vh] pb-[60px]">
        <div className="col-span-4">
          <BlogList filteredData={filteredData} searchText={searchText} />
        </div>
        <div className="col-span-1">
          <div className="mb-[30px]">
            <input className="rounded-[7px] w-[100%] py-[5px] px-[10px] outline-none" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search post" />
          </div>
          <div>
            <h3 className="text-teal-400 font-bold mb-[10px]">Categories</h3>
            <ul>
              <li>
                <a onClick={() => filterCategory("*")} className="text-slate-200 hover:text-slate-400 cursor-pointer">
                  All
                </a>{" "}
                <span className="text-teal-400">({posts.length})</span>
              </li>
              {categories.map((item) => (
                <li>
                  <a onClick={() => filterCategory(item.category)} className="text-slate-200 hover:text-slate-400 cursor-pointer">
                    {item.category}
                  </a>{" "}
                  <span className="text-teal-400">({item.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      posts: posts
    }
  };
}

export default index;
