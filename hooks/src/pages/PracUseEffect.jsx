// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function PracUseEffect() {
//   const [products,setProducts]=useState([]);
  
//   useEffect(()=>{
//     //  fetch("https://fakestoreapi.com/products")
//          axios("https://fakestoreapi.com/products")

//       .then(response => {
//         setProducts(response.data)
//   })
//       .then(data => {
//         // console.log("Products",data);
//   })
//       .catch(error=>console.log("Error fetching products:",error))
//   },[])
//   console.log(products)
  
//   return(
//     <div>
//       <h1 className='text-center'>Products</h1>
//    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', margin: '20px' }}>
//   {products.map((product) => (
//     <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
//       <img
//         src={product.image}
//         alt={product.title}
//         style={{ width: '100%', height: '150px', objectFit: 'contain' }}
//       />
//       <h6><strong>{product.title}</strong></h6>
//       <p>₹{product.price}</p>
//     </div>
//   ))}
// </div>
// </div>

//   )
// }
  


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PracUseEffect() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.log("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Dummy cards array (just 8 placeholders)
  const dummyCards = Array.from({ length: 12 });

  return (
    <div>
      <h1 className='text-center'>Products</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' , marginLeft: '20px', marginTop: '20px'}}>
      {loading
        ? dummyCards.map((_, index) => (
              <div key={index} style={{border: '1px solid gray ',padding: '10px',width: '200px',height: '240px'}}>
              <div style={{width: '100%',height: '150px',backgroundColor: '#ddd', marginBottom: '10px'}} />
              <div style={{ width: '60%', height: '15px', backgroundColor: '#ccc' }} />
            </div>
          ))
        : products.map((product) => (
            <div key={product.id} style={{border: '1px solid #ccc', padding: '10px',width: '200px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
              <img src={product.image} style={{ width: '100%', height: '150px', objectFit: 'contain' }}/>
              <h6 style={{fontSize:'14px'}}>{product.title}</h6>
              <p><strong>₹{product.price}</strong></p>
            </div>
          ))}
    </div>
    </div>
  );
}
