import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";
import { useState } from "react";
function Navbar() {

  const logo = "</Rowland>"

  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)

  const navigate = useNavigate();
  const location = useLocation();
 
  const handleProjectClick = () => {
    if (location.pathname !== "/") {
      // Navigate to home and scroll to #projects
      navigate("/", { replace: true });
    }
    // If already on home, just scroll to #projects
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure the page is loaded first
  };

  return (
    <div className="navbar">
        <NavLink onClick={()=> setOpen(false)} className={open ? "ham-logo" : "nav-logo"} to="/"><h2>{logo}</h2></NavLink>
        <img className="nav-icon" src="/hamburger.png" alt="" onClick={toggleNav} />
        <div className="right-hand">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
          <span onClick={handleProjectClick}>Projects</span>
          <AnchorLink href="#contact">Contact</AnchorLink>

          
        </div>

        <div className={`ham-nav ${open ? "open": ""}`}>
          <div className="ham-nav-links">
            <NavLink onClick={()=> setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
            <span onClick={()=> { setOpen(false);handleProjectClick(); } }>Projects</span>
            <AnchorLink  onClick={()=> setOpen(false)}href="#contact">Contact</AnchorLink>
          </div>

        </div>

      
    </div>
  )
}

export default Navbar
