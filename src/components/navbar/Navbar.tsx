import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";
import { useState } from "react";
function Navbar() {

  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)
  return (
    <div className="navbar">
        <NavLink onClick={()=> setOpen(false)} className={open ? "ham-logo" : "nav-logo"} to="/"><h2>Logo</h2></NavLink>
        <img className="nav-icon" src="/hamburger.png" alt="" onClick={toggleNav} />
        <div className="right-hand">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
          <AnchorLink href="#projects">Projects</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>

          
        </div>

        <div className={`ham-nav ${open ? "open": ""}`}>
          <div className="ham-nav-links">
            <NavLink onClick={()=> setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
            <AnchorLink onClick={()=> setOpen(false)} href="#projects">Projects</AnchorLink>
            <AnchorLink onClick={()=> setOpen(false)} href="#contact">Contact</AnchorLink>
          </div>

        </div>

      
    </div>
  )
}

export default Navbar
