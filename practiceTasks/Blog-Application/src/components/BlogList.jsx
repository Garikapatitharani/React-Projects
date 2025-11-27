import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, deleteBlog }) {
  return (
    <div className="blog-list">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} deleteBlog={deleteBlog} />
        ))
      ) : (
        <p>No blogs yet. Add one above!</p>
      )}
    </div>
  );
}

export default BlogList;
