import { Link } from "react-router-dom";
import ContactForm from "./contact-form/ContactForm";
import "./contact.scss";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <section className="left">
        <div className="text">
        <h2>Contact Me</h2>
        <p>If you require any additional information about me or have any questions, kindly reach out to me by clicking on any of my social media links below. Alternatively, you can fill out the provided form to send your message, and I will respond promptly. Thank you.</p>
        </div>
        <div className="socials">
          <Link to="mailto:momohrowland@gmail.com"><img src="/gmail-icon.svg" alt="gmail-icon"/></Link>

          <Link target="_blank" to="https://github.com/rowleks"><img src="/github-icon.svg" alt="github-icon"/></Link>

          <Link target="_blank" to="https://www.linkedin.com/in/rowland-momoh-b32a7a22a/"><img src="/linkedin-icon.svg" alt="linkedin-icon"/></Link>
            
          <Link target="_blank" to="https://instagram.com/rolex.bobzy/"><img src="/instagram-icon.svg" alt="instagram-icon"/></Link>
            
        </div>
      </section>

      <section className="right">
        <ContactForm />
      </section>

      
    </div>
  )
}

export default Contact
