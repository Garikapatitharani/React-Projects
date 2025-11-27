import React, { useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, { id: Date.now(), ...blog }]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📝 My Blog App</h1>
      <BlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;
