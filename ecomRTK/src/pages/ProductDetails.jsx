import React, { useContext } from "react";
import { useParams,useLocation } from "react-router-dom";
import { productsContext } from "../contextAPI/MyContext";

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { products, addToCart } = useContext(productsContext);

  let product;

  if (location.pathname.startsWith("/Mens")) {
    product = products.find(
      (item) =>
        item.id === parseInt(id) &&
        item.category?.toLowerCase().includes("men")
    );
  } else if (location.pathname.startsWith("/Womens")) {
    product = products.find(
      (item) =>
        item.id === parseInt(id) &&
        item.category?.toLowerCase().includes("women")
    );
  } else if (location.pathname.startsWith("/Gadgets")) {
    product = products.find(
      (item) =>
        item.id === parseInt(id) &&
        item.category?.toLowerCase().includes("electronics")
    );
  } else if (location.pathname.startsWith("/Jewelery")) {
    product = products.find(
      (item) =>
        item.id === parseInt(id) &&
        item.category?.toLowerCase().includes("jewelery")
    );
  } else {
    // Default: from Home (/product/:id)
    product = products.find((item) => item.id === parseInt(id));
  }

  if (!product) return <p>Product not found.</p>;

  return(
    <div className="flex py-10 gap-25 border mx-20 my-10 w-2/4" >
      <div className="flex-1">
        <img src={product.image} className="w-3/4 h-auto"/>
      </div>

      <div className="flex-2">
        <h2 className="font-bold">{product.title}</h2>
        <p className="my-10 mx-0" >{product.description}</p>
        <h3 className="my-10 mx-0 font-bold">${product.price}</h3>
        <button className="p-3 bg-blue-500 text-white cursor-pointer rounded hover:bg-blue-400 "
          onClick={() => addToCart(product)} >
          Add to Cart
        </button>
      </div>
    </div>
  );
}


