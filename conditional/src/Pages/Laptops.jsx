import React from "react";
import Card from "../Component/Card";

export default function Laptops({laptops}){
  return(
    <>
    <div className=" container mt-5">
    <h1>Laptops</h1>
    <div className="row">
      {laptops.map((item,index)=>{return <Card item={item}/> })}
    </div>
    </div>
    </>
  )
}





