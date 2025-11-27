import React from "react";
import Card from "../Component/Card";

export default function Smartwatches ({smartwatches}){
  return(
 <>
  <div className="container mt-4">
    <h1>Smart Watches</h1>
   <div className="row" >
    {smartwatches.map((item,index)=> (
      <Card key={index} item={item}/>
      ))}
  </div>
  </div>
  </>
  );
}