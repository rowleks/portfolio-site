import { useState } from "react";
import { motion } from "framer-motion";
import "./projects.scss";
import { myProjects } from "../../data/ProjectList";

function Projects() {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const PROJECTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(myProjects.length / PROJECTS_PER_PAGE);

  const startIdx = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const currentProjects = myProjects.slice(startIdx, endIdx);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div id="projects" className="project-section">
      <h2>Latest Projects</h2>
      <div className="grid-container">
        {currentProjects.map((project) => (
          <motion.div
            className="project"
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            variants={projectVariants}
          >
            <img
              className="project-img"
              src={project.imgSrc}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="links">
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/git-icon.svg" alt="source code" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img src="/tab-icon.svg" alt="live preview" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pagination-btn"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Projects;
