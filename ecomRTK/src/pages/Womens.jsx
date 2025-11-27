import React, { useContext } from 'react';
import { productsContext } from '../contextAPI/MyContext';
import Card from '../component/Card';

export default function Womens() {
  const { products, addToCart } = useContext(productsContext);

  const womensProducts = Array.isArray(products)
    ? products.filter(item => item.category.toLowerCase() === "women's clothing")
    : [];

  return (
    <div>
      {/* <h2>Women's Clothing</h2> */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {womensProducts.map(product => (
          <Card key={product.id} item={product} category="Womens" addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
