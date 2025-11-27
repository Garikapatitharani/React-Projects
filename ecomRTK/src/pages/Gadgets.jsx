import React, { useContext } from 'react';
import { productsContext } from '../contextAPI/MyContext';
import Card from '../component/Card';

export default function Jewellery() {
  const { products, addToCart } = useContext(productsContext);

  const gadgetProducts = Array.isArray(products)
    ? products.filter(item => item.category.toLowerCase() === "electronics")
    : [];

  return (
    <div>
      {/* <h2>Gadgets</h2> */}
      <div className='flex gap-20px flex-wrap' style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {gadgetProducts.map(product => (
          <Card key={product.id} item={product} category="Gadgets" addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
