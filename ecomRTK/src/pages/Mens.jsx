import React, { useContext } from 'react';
import { productsContext } from '../contextAPI/MyContext';
import Card from '../component/Card';

export default function Mens() {
  const { products, addToCart } = useContext(productsContext);

  const mensProducts = Array.isArray(products)
    ? products.filter(item => item.category.toLowerCase() === "men's clothing")
    : [];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {mensProducts.map(product => (
        <Card key={product.id} item={product} category="Mens" addToCart={addToCart} />
      ))}
    </div>
  );
}
