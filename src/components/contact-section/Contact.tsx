import ContactForm from "./contact-form/ContactForm";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact-section">
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur fugiat expedita similique sint. Pariatur odio aut dolorem modi architecto? Exercitationem explicabo deleniti consequatur eius!</p>
        <div className="socials">
            <img src="/gmail-icon.svg" alt="gmail-icon" />
            <img src="/github-icon.svg" alt="github-icon" />
            <img src="/linkedin-icon.svg" alt="linkedin-icon" />
            <img src="/discord-icon.svg" alt="discord-icon" />
        </div>

        <ContactForm />
      
    </div>
  )
}

export default Contact
