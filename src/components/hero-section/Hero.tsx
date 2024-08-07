import "./hero.scss";

function Hero() {
  return (
    <div className="hero-section">
        <p>Front-end | Image making</p>
        <h1>Web <span>Developer</span></h1>
        <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus enim, vel totam accusamus sed.</p>
        <img className="profile-pic" src="/hero.png" alt="" />

        <hr />

        <section className="tech-stack">
            <img src="/html.svg" alt="html-icon" />
            <img src="/css.svg" alt="css-icon" />
            <img src="/javascript.svg" alt="js-icon" />
            <img src="/typescript.svg" alt="ts-logo" />
            <img src="git.svg" alt="git-logo" />
            <img src="/react.svg" alt="react-logo" />
            <img src="/sass.svg" alt="sass-logo" />
            <img src="tailwind.svg" alt="tw-logo" />
            <img src="/node-js.svg" alt="node-logo" />

        </section>

        <hr />
      
    </div>
  )
}

export default Hero
