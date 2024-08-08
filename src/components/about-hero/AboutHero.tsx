import "./about-hero.scss";

function AboutHero() {
  return (
    <div className="about-hero">
        <section className="top">
            <div className="pic-bio">
                <img src="/profile-pic2.png" alt="" />
                <div className="info">
                    <h3>Rowland Momoh</h3>
                    <p>Web Developer | IT Support Specialist</p>
                </div>
            </div>

            <div className="bio">
                <h3>Bio:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam deserunt, laudantium rerum facilis dolorem vero mollitia, repellendus saepe, autem distinctio enim beatae ratione unde? Exercitationem quos expedita minima nulla.</p>
            </div>

        </section>

        <section className="bottom">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis reprehenderit voluptas quam quas aliquid, eveniet optio quibusdam, soluta praesentium saepe unde quaerat asperiores a quod! Laborum, magnam. Incidunt quam sed ipsum a ipsam magni fugit quibusdam, animi dolorem non eveniet corrupti, quasi doloremque officiis sunt ab provident perferendis ipsa velit.</p>
        </section>

        <hr />
      
    </div>
  )
}

export default AboutHero
