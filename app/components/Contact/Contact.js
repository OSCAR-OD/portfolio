import Link from "next/link"
import './Contact.css';

const Contact = () => {
    return (
      <section id="contact" className="contact container section">
      <h2 className="contact__title">Get In Contact</h2>
      <p className="contact__description">
        Whether you are starting a project, have business inquiries or just
        want to say hi, my inbox is always open so feel free to reach out and
        I will get back to you as soon as possible (oscardeb2000@gmail.com).
      </p>
      <a
        className="contact__btn btn"
        href="https://www.linkedin.com/in/oscar-deb-2b028b21b/"
        target="_blank"
        >React Out</a
      >
    </section>
    );
    }

export default Contact;