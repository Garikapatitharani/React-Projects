// import React from 'react'

// export default function LearnUseState() {
//   let name='Tharani'
//   // console.log("before:",name)
//   function handleName(){
//     name='Tharani Garikapati'
//     // console.log("after:",name)
//   }
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={handleName}>Show fullName</button>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export default function LearnUseState() {
//   const [name,setName] =useState("Tharani");
//   // console.log(useState('TharaniGarikapati'))
//   function handleName(){
//     setName("Tharani Garikapati")
//   }
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={handleName}>Show fullName</button>
//     </div>
//   )
// }




// import React, { useState } from 'react'

// export default function LearnUseState() {
//     const [Count,setCount]=useState(0);
//   function handleCount(){
//     setCount(Count+1);             o/p:1,2,3,4,5,6,7,8,....
//   }
//   return (
//     <div>
//       <h1>{Count}</h1>
//       <button onClick={handleCount}>Increment</button>
//     </div>
//   )
// }




// import React, { useState } from 'react'

// export default function LearnUseState() {
//     const [Count,setCount]=useState(0);
//   function handleCount(){
//     setCount(Count+1);
//     setCount(Count+1);            
//     setCount(Count+1);             o/p:1,2,3,4,5,6,7,....
//   }
//   return (
//     <div>
//       <h1>{Count}</h1>
//       <button onClick={handleCount}>Increment</button>
//     </div>
//   )
// }



// import React, { useState } from 'react'

// export default function LearnUseState() {
//     const [Count,setCount]=useState(0);
//   function handleCount(){
//     setCount(Count+1);
//     setCount(Count+1);            
//     setCount(Count+5);             o/p:7,14,21,28,35 ....   (this is Asynchronous)

//     setCount ((prev)=> prev+1);    //  in arrow function no need to add return  & {}
//     setCount ((prev)=> prev+1);    
//     setCount ((prev)=> prev+1);      o/p:7,14,21,28,35 ....(this is Synchronous)
//   }
//   return (
//     <div>
//       <h1>{Count}</h1>
//       <button onClick={handleCount}>Increment</button>
//     </div>
//   )
// }




// import React, { useState } from 'react'

// export default function LearnUseState() {
//   const [car,setCar] =useState({name:'Benz', price:1000000, country:""});
//   function handleObj(){
//     // setCar({name:'Thar'}); 
//     setCar(prev=>({...prev,name:'Audi',country:'USA'}))      //using spread operator
//   }
//   return (
//     <div>
//       <h1>{car.name}</h1>
//       <h2>{car.price}</h2>
//       <p>{car.country}</p>
//       <button onClick={handleObj}>update</button>
//     </div>
//   )
// }




