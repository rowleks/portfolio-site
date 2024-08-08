import AboutHero from "../../components/about-hero/AboutHero";
import Contact from "../../components/contact-section/Contact";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./about.scss";

function About() {
  return (
    <div className="about-page">
        <Navbar />
        <AboutHero />
        <Contact />
        <Footer />
      
    </div>
  )
}

export default About
