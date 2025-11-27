import React from "react";

function BlogCard({ blog, deleteBlog }) {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>✍️ {blog.author}</p>
      <p>{blog.content}</p>
      <button onClick={() => deleteBlog(blog.id)}>Delete</button>
    </div>
  );
}

export default BlogCard;
