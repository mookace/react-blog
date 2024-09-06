import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blog_per_page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      //filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* page category */}
      <div>Page category</div>

      {/* Blog cart section */}
      <div>
        <BlogCards
          blogsData={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>

      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogsData={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
