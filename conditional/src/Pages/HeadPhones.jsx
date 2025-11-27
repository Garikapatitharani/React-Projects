import React from "react";
import Card from "../Component/Card";

export default function HeadPhones({headphones}){
return(
  <>
  <div className="container mt-4">
    <h1>Head Phones</h1>
   <div className="row" >
    {headphones.map((item,index)=> (
      <Card key={index} item={item}/>
      ))}
  </div>
  </div>
  </>
  )
}











