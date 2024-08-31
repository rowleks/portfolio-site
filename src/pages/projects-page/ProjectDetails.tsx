import Contact from "../../components/contact-section/Contact";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProjectInfo from "../../components/project-info/ProjectInfo";
import "./project-details.scss";

function ProjectDetails() {
  return (
    <div className="project-page">
        <Navbar />
        <ProjectInfo />
        <Contact />
        <Footer />


      
    </div>
  )
}

export default ProjectDetails
