import React from "react";
import angular from './assets/Angular.png';
import iconic from './assets/Iconic.png';
import uiImage from './assets/ui-dev.jpg';
import Reactjs from './assets/Reactjs.png';
import web from './assets/web-dev.jpeg';
import meanstack from './assets/meanstack.jpg';
import mernstack from './assets/mernstack.jpg';
import DigitalMarketing from './assets/DigitalMarketing.png'
import Card from "./dynamicComponents/Card";



function App (){

  const data =[
    {
       image:angular ,
       name:"Angular",
       desc:"Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code dat should be composed."
    },
    {
       image:iconic,
       name:"Iconic",
       desc:"Our course covers a wide variety of topics from increasing app performance, to building custom native plugins, to securing your apps."
    },
    {
       image:web,
       name:"web",
       desc:"Web development is the backbone of every online business today, creating endless career opportunities across industries."
    },
    {
      image:DigitalMarketing,
      name:"DigitalMarketing",
      desc:" This program will help you plan and execute transformational digital marketing strategies and best practices."
    },
    {
      image:meanstack,
      name:"MeanStack",
      desc:" In this course we will build an in depth full stack social network application using Angular, Express, React, Redux and MongoDB along with ES6+."
    },
     {
      image:mernstack,
      name:"MeanStack",
      desc:"MERN stack technologies covers both Front End (client-side) and Server Side."
    }, {
      image:uiImage,
      name:"MeanStack",
      desc:" The world of UI and web development is moving fast, due to the emerging new technologies."
    },
    {
      image:Reactjs,
      name:"Reactjs",
      desc:"React Js application is divided into reusable components that allow you to build dynamic user interface applications."
    }
    

  ]



  return(
    <>
    <h1 style={{textAlign:'center', padding:'5px' , margin:'2px'}}>Trending Courses</h1>
    <Card data={data}/>
    </>
  )

}
export default App