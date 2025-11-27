import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const productsContext = createContext();

export default function MyContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching Products:", err));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    // Prevent duplicates
    if (!cart.find(item => item.id === product.id)) {
      setCart(prevCart => [...prevCart, product]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <productsContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </productsContext.Provider>
  );
}




