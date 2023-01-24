import React, { useEffect, useState } from "react";
import BlogPostOne from "../blogPost/BlogPostOne";
import ReactPaginate from "react-paginate";

const BlogList = ({ filteredData, searchText }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="up-anim grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {currentItems
          .filter((item) => {
            return item.frontmatter.title.toLowerCase().includes(searchText.toLowerCase());
          })
          .map((post, index) => (
            <BlogPostOne key={index} post={post} />
          ))}
      </div>
      <ReactPaginate breakLabel="..." nextLabel="next >" onPageChange={handlePageClick} pageRangeDisplayed={3} pageCount={pageCount} previousLabel="< previous" renderOnZeroPageCount={null} containerClassName="pagination" pageLinkClassName="page-num" previousLinkClassName="page-num" nextLinkClassName="page-num" activeLinkClassName="active-page" />
    </>
  );
};

export default BlogList;
