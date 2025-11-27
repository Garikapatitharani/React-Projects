import React, { useContext } from 'react';
import { productsContext } from '../contextAPI/MyContext';
import Card from '../component/Card';

export default function Home() {
  const { products } = useContext(productsContext); // ✅ get only products array

  return (
    <div>
      {/* <h1>All Products</h1> */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {Array.isArray(products) && products.map((item) => (
          <Card key={item.id} item={item}  />
        ))}
      </div>
    </div>
  );
}
