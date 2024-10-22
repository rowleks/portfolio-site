import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";
import { useCallback, useEffect, useState } from "react";
function Navbar() {

  const logo = "</Rowland>"

  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)

  const navigate = useNavigate();
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Hide navbar on scroll down
    } else {
      setShowNavbar(true); // Show navbar on scroll up
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Add lastScrollY as a dependency

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar); // Clean up event listener
    };
  }, [controlNavbar]); // Add controlNavbar as a dependency

  const handleProjectClick = (id:string) => {
    if (location.pathname !== "/") {
      // Navigate to home and scroll to #projects
      navigate("/", { replace: true });
    }
    // If already on home, just scroll to #projects
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure the page is loaded first
  };

  return (
    <div className={`navbar ${showNavbar ? "active" : "hidden"}`}>
        <NavLink onClick={()=> setOpen(false)} className={open ? "ham-logo" : "nav-logo"} to="/"><h2 onClick={() => handleProjectClick("home")}>{logo}</h2></NavLink>
        <img className="nav-icon" src="/hamburger.png" alt="" onClick={toggleNav} />
        <div className="right-hand">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
          <span onClick={()=> handleProjectClick("projects")}>Projects</span>
          <AnchorLink href="#contact">Contact</AnchorLink>

          
        </div>

        <div className={`ham-nav ${open ? "open": ""}`}>
          <div className="ham-nav-links">
            <NavLink onClick={()=> setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
            <span onClick={()=> { setOpen(false); handleProjectClick("projects"); } }>Projects</span>
            <AnchorLink  onClick={()=> setOpen(false)}href="#contact">Contact</AnchorLink>
          </div>

        </div>

      
    </div>
  )
}

export default Navbar
