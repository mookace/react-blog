import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);

  return (
    <div>
      <div className="text-2xl font-semibold px-4">Latest Blogs</div>
      <div>
        {popularBlogs.slice(0, 5).map((blog) => (
          <div key={blog.id} className="my-2 border-b-2 border-spacing-2">
            <h4 className="font-medium mb-2">{blog.title}</h4>
            <Link
              to="/"
              className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
            >
              Read Now <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        ))}
      </div>

      {/* popular blog */}
      <div>
        <div className="text-2xl font-semibold px-4 mt-20">Popular Blogs</div>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div key={blog.id} className="my-2 border-b-2 border-spacing-2">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read Now <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
