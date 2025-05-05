import React from "react";
import { blogs } from "./blogsData";
import "./style2.css";
// import day1 from "../assets/day1.jpg";

const BlogPage = ({ onSelectBlog }) => {
  return (
    <div className="blog-page">
    <div className="hello1-text">
      <h1>My Educational Tour Blog</h1>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div
            className="blog-card animate"
            key={blog.id}
            onClick={() => onSelectBlog(blog)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={blog.images[0]} alt={blog.title} />
            <h3>{blog.day}:{blog.title}</h3>
            {/* <p>{blog.date}</p> */}
            {/* <p>{blog.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
