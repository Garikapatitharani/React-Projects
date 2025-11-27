// import React, { useReducer } from 'react'

// export default function LearnUseReducer() {
//   function reducerCount(currentState,action){
//    console.log("currentState,action", currentState,action);
//     switch (action) {
//       case 'increment': return currentState + 1;
//       case 'decrement': return currentState - 1;
//   }
// }
//   const [count,dispatch]= useReducer(reducerCount,0)
//   return (
//     <div>
//       {/* <p>LearnUseReducer</p> */}
//       <h1>{count}</h1>
//       <button onClick={()=>{dispatch('increment')}}>Increment by 1</button>
//       <button className='m-2' onClick={()=>{dispatch('decrement')}}>Decrement by 1</button>

//       </div>
//   )
// }






// import React, { useReducer } from 'react'

// export default function LearnUseReducer() {
//   function reducerCount(currentState,action){
//    console.log("currentState,action", currentState,action);
//     switch (action.type) {
//       case 'increment': return currentState + action.payload;
//       case 'decrement': return currentState - action.payload;
//   }
// }
//   const [count,dispatch]= useReducer(reducerCount,0)
//   return (
//     <div>
//       {/* <p>LearnUseReducer</p> */} 
//       <h1>{count}</h1>
//       <button className='m-2' onClick={()=>{dispatch({type:'increment',payload:1})}}>Increment by 1</button>
//       <button className='m-2' onClick={()=>{dispatch({type:'decrement',payload:1})}}>Decrement by 1</button>
//       <button className='m-2' onClick={()=>{dispatch({type:'increment',payload:5})}}>Increment by 5</button>
//       <button className='m-2' onClick={()=>{dispatch({type:'decrement',payload:5})}}>Decrement by 5</button>
// </div>  
//   )
// }








// import React, { useReducer } from 'react'

// const UseReducer = () => {
//   const initialState = { cart: [] };
//   function cartReducer(currentState, action) {
//     console.log("currentState,action", currentState, action)
//     switch (action.type) {
//       case "addToCart": return { cart: [...currentState.cart, action.payload] };
//       case "removeFromCart": return { cart: currentState.cart.filter(item => item.id !== action.payload) };
//     }
//   }
//   const [state, dispatch] = useReducer(cartReducer, initialState)
//   return (
//     <div className='p-2 m-2'>
//       {/* <h1>LearnUserReducer</h1> */}
//       <button onClick={() => { dispatch({ type: "addToCart", payload: { name: "Digital pad", id: Date.now() } }) }}>Add To Cart</button>
//       <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}></div>
//       {state.cart.map((items, key) => {
//         <div key={items.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
//           <h4>{items.id}</h4>
//           <h2>{items.name}</h2>
//           <button onClick={() => dispatch({ type: "removeFromCart", payload: items.id })}>Remove from cart</button>
//         </div>

//       })}

//     </div>
//   )
// }

// export default UseReducer


import React, { useReducer } from 'react'

const UseReducer = () => {
  const initialState = { cart: [] };

  function cartReducer(currentState, action) {
    console.log("currentState,action", currentState, action);
    switch (action.type) {
      case "addToCart":
        return { cart: [...currentState.cart, action.payload] };
      case "removeFromCart":
        return { cart: currentState.cart.filter(item => item.id !== action.payload) };
      default:
        return currentState;
    }
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className='p-2 m-2'>
      <button onClick={() => {
        dispatch({ type: "addToCart", payload: { name: "Digital pad", id: Date.now() } })
      }} >
        Add To Cart
      </button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        {state.cart.map((items) => (
          <div
            key={items.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }} >
            <h4>{items.id}</h4>
            <h2>{items.name}</h2>
            <button onClick={() => dispatch({ type: "removeFromCart", payload: items.id })}>
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UseReducer
