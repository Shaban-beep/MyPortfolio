import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbarstyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); // jb handleClick chaly to setClick mn click ki jo bi value ho us ko reverse kr dena
  const [color,setColor] = useState(false)
  const colorChange = ()=>{
    if(window.scrollY>=100){
      setColor(true)
    }else{
      setColor(False)
    }
  }
  window.addEventListener("scroll", colorChange)
  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="py-0 px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="py-0 px-2">
          <Link to="/project">Project</Link>
        </li>
        <li className="py-0 px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="py-0 px-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
////////////// hamburger story /////////////
// onClick pe handleClick chaly jo k setClick mn mujood Click ki value ko change kar dy mtlb agr nav lines hon to close icon mn convert kr de wrna agr close icon ho to usy nav lines mn change kr de
// phir media query k default mn nav-menu ko left: -100% kr do phir jb active ho to left se zero kr k screen pe ul ko ly ao.
// jb click ho ul mn active nav-menu pass karo wrna default nav-menu rehny do
// jb click ho to nav-menu.active run ho jaye
export default Navbar;
