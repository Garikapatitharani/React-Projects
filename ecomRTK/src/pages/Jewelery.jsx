import React, { useContext } from 'react';
import { productsContext } from '../contextAPI/MyContext';
import Card from '../component/Card';

export default function Jewellery() {
  const { products, addToCart } = useContext(productsContext);

  const jewelleryProducts = Array.isArray(products)
    ? products.filter(item => item.category.toLowerCase() === "jewelery")
    : [];

  return (
    <div>
      {/* <h2>Jewellery</h2> */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {jewelleryProducts.map(product => (
          <Card key={product.id} item={product} category="Jewelery" addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
