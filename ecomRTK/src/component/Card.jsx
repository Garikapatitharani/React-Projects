import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productsContext } from '../contextAPI/MyContext' 

export default function Card({ item,category }) {
  const { addToCart } = useContext(productsContext) 

  return (
    <div className="p-2 m-8 w-75 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
     <Link to={category ? `/${category}/${item.id}` : `/product/${item.id}`}>
        <img
          className="p-2 px-14 rounded-t-lg h-50"
          src={item.image}
          alt={item.title}
        />
      </Link>
      <div className="px-2 pb-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <br />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${item.price}
          </span>
          <button
            onClick={() => addToCart(item)} 
            className="bg-gray-300 p-2 rounded hover:bg-gray-400 cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

