import React from "react";
import { electronicsProducts } from "./data/products";
import Home from "./Pages/Home";
import Smartphones from "./Pages/Smartphones";
import Laptops from "./Pages/Laptops";
import HeadPhones from "./Pages/HeadPhones";
import Smartwatches from "./Pages/Smartwatches"; 
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Navigation from "./routing/navigation";

export default function App() {
  const Phones = electronicsProducts.filter(item => item.category === "Smartphones");
  const laptops = electronicsProducts.filter(item => item.category === "Laptops");
  const headphone = electronicsProducts.filter(item => item.category === "HeadPhones");
  const SmartwatchList = electronicsProducts.filter(item => item.category === "Smartwatches");

  return (

    <>
      {/* <Home electronicsProducts={electronicsProducts} />
      <Smartphones Phones={Phones} />
      <Laptops laptops={laptops} />
      <HeadPhones headPhones={headphone} />
      <Smartwatches smartwatches={SmartwatchList} />  */}
      <Header/>
      <Navigation/>
      {/* <Routes>
        <Route path="/" element={<Home electronicsProducts={electronicsProducts}/>}/>
        <Route path="/Smartphones" element={<Smartphones Phones={Phones} />}/>
        <Route path="/Laptops" element={<Laptops laptops={laptops}/>}/>
        <Route path="/HeadPhones" element={<HeadPhones headPhones={headphone} />}/>
        <Route path="/Smartwatches" element={<Smartwatches smartwatches={SmartwatchList} />}/>
      </Routes> */}
      <Footer/>
    </>
  );
}
