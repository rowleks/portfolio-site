import "./project-info.scss";

function ProjectInfo() {
  return (
    <div className="project-info">
        <div className="left">
            <img src="./project1.png" alt="" />
            <div className="description">
                <p><b>Title:</b> Project1</p><br/>
                <p><b>Date:</b> 10-Aug-2023 </p><br />
                <p><b>Brief:</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorem praesentium ullam. Pariatur quidem voluptatum tenetur illum iusto nobis fugiat! </p>

            </div>

        </div>
        <div className="right">
            <section className="project-overview">
                <h2>Project Overview</h2>
                <p>This project was built to solve X problem. It uses Y technologies to achieve Z features...</p>
                <ul>
                    <li>Feature 1: Brief description of the feature.</li>
                    <li>Feature 2: Brief description of the feature.</li>
                    <li>Feature 3: Brief description of the feature.</li>
                </ul>
            </section>
            <hr />

            <section className="development-process">
                <h2>Challenges & Solutions</h2>
                <p>One of the main challenges was...</p>
                <h2>Lessons Learned</h2>
                <p>This project helped me improve...</p>
            </section>

            <hr />

            <section className="links">
                <h2>Links</h2>
                <a href="">View Source Code</a>
                <a href="">View Live Demo</a>
            </section>


        </div>

      
    </div>
  )
}

export default ProjectInfo
