import "./hero.scss";

function Hero() {
  return (
    <div className="hero-section">
      <section className="top">
        <div className="info">
          <p className="role">React | NextJS</p>
          <h1>Web <span>Developer</span></h1>
          <p className="bio">Hello, My name is Rowland Momoh, I am a front-end developer keen on making simple, elegeant and aesthetics websites with the latest technologies</p>
        </div>

        <img className="profile-pic" src="/profile-pic22.png" alt="" />

      </section>
      
        <hr />

        <section className="tech-stack">
            <img src="/html.svg" alt="html-icon" />
            <img src="/css.svg" alt="css-icon" />
            <img src="/javascript.svg" alt="js-icon" />
            <img src="/typescript.svg" alt="ts-logo" />
            <img src="git.svg" alt="git-logo" />
            <img src="/react.svg" alt="react-logo" />
            <img src="/node-js.svg" alt="node-logo" />
            <img src="tailwind.svg" alt="tw-logo" />
            <img src="/sass.svg" alt="sass-logo" />
        </section>

        <hr />
      
    </div>
  )
}

export default Hero
