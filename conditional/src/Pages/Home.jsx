
import React from "react";
import Card from "../Component/Card";

export default function Home({ electronicsProducts }) {
  console.log("Home electronicsProducts", electronicsProducts);

  return (
    <div className="container mt-4">
      <h1>Home</h1>
      <div className="row">
        {electronicsProducts.map((item, index) => (
          <div className="col-3 mb-2" key={index}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

