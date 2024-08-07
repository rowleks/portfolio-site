import Contact from "../../components/contact-section/Contact";
import Hero from "../../components/hero-section/Hero";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";
import "./home.scss";

function Home() {
  return (
    <div className="homepage">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      
    </div>
  )
}

export default Home
