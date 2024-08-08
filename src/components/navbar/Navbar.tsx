import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
        <h2>Logo</h2>
        <img src="/hamburger.png" alt="" />
        <div className="right-hand">
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>

      
    </div>
  )
}

export default Navbar
