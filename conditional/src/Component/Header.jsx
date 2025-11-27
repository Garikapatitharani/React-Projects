import React from 'react'
import logo from "../assets/Apple.jpg"
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='d-flex align-items-center bg-info'>
      <Link to="/"> 
      <img src={logo} alt='' style={{width:"100px" }} className='border rounded-circle'/> 
      </Link>

      <ul className='d-flex list-unstyled justify-content-around flex-grow-1'>
         <li><Link to="/Smartphones">SmartPhones</Link></li>
         <li><Link to="/Laptops">Laptops</Link></li>
         <li><Link to="/HeadPhones">HeadPhones</Link></li>
         <li><Link to="/Smartwatches">Smartwatches</Link></li>
      </ul>
    </div>
  )
}
