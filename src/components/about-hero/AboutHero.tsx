
import "./about-hero.scss";

function AboutHero() {
  return (
    <div className="about-hero">
        <section className="top">
            <div className="pic-bio">
                <img src="/profile-pic11.png" alt="" />
                <div className="info">
                    <h3>Rowland Momoh</h3>
                    <p>Web Developer <b>|</b> IT Support Specialist</p>
                    <a href="/resume.pdf" download="Rowland_Momoh_CV.pdf">
                        <span className="download-btn">
                            <span>Download CV</span>
                            <img src="/download-icon.png" alt="download icon"/>
                        </span>
    
                    </a>
                </div>
            </div>

            <div className="bio">
                <h3>Bio:</h3>
                <p>I am a dedicated <em>Web Developer</em> proficient in React, TypeScript, Material UI, and NextJS. I am passionate about creating responsive, user-friendly interfaces, I enjoy turning complex problems into intuitive digital experiences. With a strong foundation in JavaScript and front-end technologies, I continuously explore the latest tools and frameworks to deliver innovative solutions. I am also an <em>IT Support Specialist</em> with strong problem solving, technical and soft skills.<br /> <br />As a versatile candidate, I'm eager to contribute my skills to both domains, offering a unique blend of technical knowledge and a commitment to continuous learning. I'm excited about the opportunity to grow and contribute in a collaborative environment, I'm ready to embark on a dynamic career journey!</p>
            </div>

        </section>

        <section className="bottom">
            <p>Beyond coding and tech, I'm an avid reader interested in psychology, wealth and personal growth, and I enjoy chess, puzzles, sitcoms, animes, and video games. Some of my top favourite books are; <em>The Alchemist</em> by Paulo Coelho, <em>How to Win Friends and Influence People</em> by Dale Carnegie and <em>Outliers</em> by Malcom Gladwell. If you share similar interests and wish to collaborate or discuss with me, feel free to reach out via any of the outlets provided in the Contact Me section below. </p>
        </section>

        <hr />
      
    </div>
  )
}

export default AboutHero
