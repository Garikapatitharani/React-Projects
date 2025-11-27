import React from "react";
import Card from "../Component/Card";

export default function Smartphones({phones}){
  return(
    <>
   <div className=" container mt-5">
    <h1>SmartPhones</h1>
      <div className="row">
      {phones.map((item,index)=> {return <Card item={item}/>})}
    </div>
    </div>
    </>
  )
}