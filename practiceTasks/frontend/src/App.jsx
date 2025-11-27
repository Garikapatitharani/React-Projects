import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import GenerateReport from "./GenerateReport";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Assessment Management System
      </h1>

      {!token ? (
        <div className="flex gap-8">
          {/* Signup Form */}
          <Signup/>

          {/* Login Form */}
          <Login
            onLogin={(t) => {
              localStorage.setItem("token", t);
              setToken(t);
            }}
          />
        </div>
      ) : (
        <div className="w-full max-w-md">
          <GenerateReport token={token} />
        </div>
      )}
    </div>
  );
}
