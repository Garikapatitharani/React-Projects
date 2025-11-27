import React from "react";

export default function Card({ item }) {
  console.log("Card item", item);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.category}</h5>
          <p className="card-text">{item.description}</p>
          <h6>Rs: {item.price}</h6>

          {item.quantity > 0 && item.quantity < 10 && (
            <p className="text-danger" >Only {item.quantity} left in stock!</p>
          )}

          {item.quantity === 0 ? (
            <a href="#" className="btn btn-danger">Out of stock</a>
          ) : (
            <a href="#" className="btn btn-primary">Add to cart</a>
          )}
        </div>
      </div>
    </>
  );
}
