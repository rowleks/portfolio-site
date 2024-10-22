import { motion } from "framer-motion";
import "./projects.scss";
import {myProjects} from "../../data/ProjectList"

function Projects() {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="projects" className="project-section">
      <h2>Latest Projects</h2>
      <div className="grid-container">
        {myProjects.map((project) => (
          <motion.div
            className="project"
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            variants={projectVariants}
          >
            <img className="project-img" src={project.imgSrc} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.sourceCode} target="_blank"><img src="/git-icon.svg" alt="source code" /></a>
              <a href={project.live} target="_blank"><img src="/tab-icon.svg" alt="live preview" /></a>
            </div>
          </motion.div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Projects;
