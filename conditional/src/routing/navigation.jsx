import React from 'react'
import { electronicsProducts } from '../data/products'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Smartphones from '../Pages/Smartphones';
import Laptops from '../Pages/Laptops';
import HeadPhones from '../Pages/HeadPhones';
import Smartwatches from '../Pages/Smartwatches';

export default function Navigation() {

  const Phones = electronicsProducts.filter(item => item.category === "Smartphones");
  const laptops = electronicsProducts.filter(item => item.category === "Laptops");
  const headphone = electronicsProducts.filter(item => item.category === "HeadPhones");
  const SmartwatchList = electronicsProducts.filter(item => item.category === "Smartwatches");
  
  return (
    <Routes>
       <Route path='/' element={<Home electronicsProducts={electronicsProducts}/>}/>
       <Route path='/SmartPhones' element={<Smartphones phones={Phones}/>}/>
       <Route path='/Laptops' element={<Laptops laptops={laptops}/>}/>
       <Route path='/Headphones' element={<HeadPhones headphones={headphone}/>}/>
       <Route path='/Smartwatches' element={<Smartwatches smartwatches={SmartwatchList}/>}/>
    </Routes>
  );
}


