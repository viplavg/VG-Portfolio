import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <p className="contact__eyebrow">Get In Touch</p>

          <h2 className="contact__title">
            Interested in working together?
          </h2>

          <p className="contact__description">
            I&apos;m open to discussing frontend, full-stack, and
            product-focused opportunities where I can help build scalable,
            reliable, and user-friendly web applications.
          </p>

          <div className="contact__actions">
            <a
              href="mailto:viplavg1999@gmail.com"
              className="btn btn-primary"
            >
              <HiOutlineMail aria-hidden="true" />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/viplavg/"
              target="_blank"
              rel="noreferrer"
              className="btn contact__secondary-button"
            >
              <FaLinkedinIn aria-hidden="true" />
              LinkedIn
            </a>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/viplavg"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Viplav Gupta's GitHub profile"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/viplavg/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Viplav Gupta's LinkedIn profile"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>

            <a
              href="mailto:viplavg1999@gmail.com"
              aria-label="Send an email to Viplav Gupta"
            >
              <HiOutlineMail aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;