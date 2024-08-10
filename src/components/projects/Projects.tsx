import "./projects.scss";

function Projects() {
  return (
    <div id="projects" className="project-section">
        <h2>Latest Projects</h2>
        <div className="grid-container">
            <div className="project">
                <img src="./project1.png" alt="" />
                <h4>Free Bird</h4>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className="project">
                <img src="./project2.png" alt="" />
                <h4>Purple Haze</h4>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className="project">
                <img src="./project3.png" alt="" />
                <h4>You Really Got Me</h4>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className="project">
                <img src="./project4.png" alt="" />
                <h4>American Girl</h4>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className="project">
                <img src="./project5.png" alt="" />
                <h4>Whole Lotta Love</h4>
                <p>Lorem ipsum dolor</p>
            </div>

        </div>

        <hr />
      
    </div>
  )
}

export default Projects
