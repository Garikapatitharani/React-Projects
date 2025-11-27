import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // useEffect to apply the theme to the body
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#333333";
    document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
  }, [theme]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>🌗 Theme Toggle</h2>
      <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
