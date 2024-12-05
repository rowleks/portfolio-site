import { Typewriter } from "react-simple-typewriter";
import "./hero.scss";
import "./Popover"
import TechStack from "./Popover";

function Hero() {

  const typewriter = 
  <Typewriter
  words={[
    "Hello, My name is Rowland Momoh", "I am a front-end developer keen on building simple, elegant and aesthetic websites with the latest technologies", "Hello, My name is Rowland Momoh, I am a front-end developer keen on building simple, elegant and aesthetic websites with the latest technologies"
  ]}
  loop={1}
  cursorStyle="|"
  typeSpeed={80} 
  deleteSpeed={30} 
  delaySpeed={1000}
  cursor
/>

  return (
    <div className="hero-section" id="home">
      <section className="top">
        <div className="info">
          <p className="role">React | NextJS</p>
          <h1>Web <span>Developer</span></h1>
          <p className="bio">{typewriter}</p>
        </div>

        <img className="profile-pic" src="/profile-pic22.png" alt="" />

      </section>
      
        <hr />
        
        <section className="tech-stack">
          <TechStack />
       
        </section>

        <hr />
      
    </div>
  )
}

export default Hero
