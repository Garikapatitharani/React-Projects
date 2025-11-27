import React from 'react'
import logo from '../assets/Product.jpeg'
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-blue-200 flex '>
      <Link to='/'>
      <img src={logo} alt='' className='w-30 p-2 h-30 rounded-full'/>
      </Link>
      <ul className='flex justify-around flex-1 items-center'>
        <li><Link to='/Mens'className='font-bold' >Men's Clothing</Link></li>
        <li><Link to='/Jewelery'className='font-bold'>Jewelery</Link></li>
        <li><Link to='/Gadgets' className='font-bold'>Gadgets</Link></li>
        <li><Link to='/Womens' className='font-bold'>Women's Clothing</Link></li>
        <li><Link to='/cart' className='font-bold'><FaShoppingCart/></Link></li>
      </ul>
    </div>
  )
}
 