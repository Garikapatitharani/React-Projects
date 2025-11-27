import React from "react";
import logowhite from "./logo-white.png"
import './Navbar.css'

function Navbar(){
  return(
   <div className="navbar-container"> 
      <img src={logowhite} className="App-logo" alt="logo"/>      
      <nav className="nav">
        <a href="#">All Courses</a>
        <a href="#">Placements</a>
        <a href='#'>Internships</a>
        <a href='#'>Existing Students</a>
        <a href='#'>About us</a>
        <a href='#'>Reviews</a>
        <a href='#'>Blog</a>
    </nav>
   </div> 
  )
}
export {Navbar}