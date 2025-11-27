import React, { useContext } from 'react';
import { productsContext } from '../contextAPI/MyContext';

export default function Cart() {
  const { cart,removeFromCart } = useContext(productsContext);

  return (
    <div style={{ padding: "20px" }}>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='flex flex-col gap-15 w-1/2'>
          {cart.map((item) => (
            <div
              key={item.id} className='flex items-center border rounded p-10 bg-white' >
              <img src={item.image} alt={item.title} className='w-1/4 h-1/4 mx-15' />
              <div className='flex-1'>
                <h4 className='my-0 mx-5'>{item.title}</h4>
                <p className='m-0 p-6 text-xl font-bold'>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className='flex px-2 py-3 rounded text-white bg-red-400 cursor-pointer' >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
