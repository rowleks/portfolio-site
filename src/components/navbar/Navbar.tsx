import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
        <NavLink className="nav" to="/"><h2>Logo</h2></NavLink>
        <img src="/hamburger.png" alt="" />
        <div className="right-hand">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
          <AnchorLink href="#projects">Projects</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>

          
        </div>

      
    </div>
  )
}

export default Navbar
