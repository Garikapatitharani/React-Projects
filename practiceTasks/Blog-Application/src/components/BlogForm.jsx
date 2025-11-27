import React, { useState } from "react";

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !content) return;
    addBlog({ title, author, content });
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Write your content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
      />
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default BlogForm;
