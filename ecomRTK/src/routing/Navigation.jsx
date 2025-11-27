import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
import Gadgets from '../pages/Gadgets'
import Jewelery from '../pages/Jewelery'
import Cart from '../pages/Cart'
import ProductDetails from "../pages/ProductDetails";



export default function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Mens' element={<Mens />} />
      <Route path='/Womens' element={<Womens />} />
      <Route path='/Gadgets' element={<Gadgets />} />
      <Route path='/Jewelery' element={<Jewelery />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />


      <Route path="/:category/:id" element={<ProductDetails />} />
      {/* <Route path="/Womens/:id" element={<ProductDetails />} />
      <Route path="/Gadgets/:id" element={<ProductDetails />} />
      <Route path="/Jewelery/:id" element={<ProductDetails />} /> */}
    </Routes>
  )
}
