import "./about-hero.scss";

function AboutHero() {
  return (
    <div className="about-hero">
      <section className="top">
        <div className="pic-bio">
          <img src="/profile-pic11.png" alt="" />
          <div className="info">
            <h3>Rowland Momoh</h3>
            <p>
              Web Developer <b>||</b> IT Support Specialist
            </p>
            <a href="/resume.pdf" download="Rowland_Momoh_CV.pdf">
              <span className="download-btn">
                <span>Download CV</span>
                <img src="/download-icon.png" alt="download icon" />
              </span>
            </a>
          </div>
        </div>

        <div className="bio">
          <h3>About Me</h3>
          <p>
            As a passionate <em>Web Developer</em>, I excel in crafting
            responsive, user-friendly interfaces using React, TypeScript,
            Vue.js, and Next.JS. I take pride in turning complex problems into
            intuitive digital experiences. With a strong foundation in front-end
            technologies, I continuously explore the latest tools and
            frameworks, including animations using GSAP and Framer, to deliver
            innovative solutions. Additionally, as an{" "}
            <em>IT Support Specialist</em>, I possess strong problem-solving,
            technical, and soft skills.
            <br /> <br />I am a versatile candidate with a strong work ethic and
            a commitment to continuous learning. I'm eager to contribute to both
            domains and grow in a collaborative environment. I'm ready to embark
            on a dynamic career journey!
          </p>
        </div>
      </section>

      <section className="bottom">
        <p>
          Beyond coding and tech, I'm an avid reader interested in psychology,
          scriptures, wealth and personal growth, and I enjoy chess, puzzles,
          sitcoms, animes, and video games. Some of my top favourite books are;{" "}
          <em>The Alchemist</em> by Paulo Coelho, <em>Platonic</em> by Marisa
          Franco and <em>Outliers</em> by Malcom Gladwell. If you share similar
          interests and wish to collaborate or discuss with me, feel free to
          reach out via any of the outlets provided in the Contact Me section
          below.{" "}
        </p>
      </section>

      <hr />
    </div>
  );
}

export default AboutHero;
