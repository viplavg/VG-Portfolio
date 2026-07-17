import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Contact.css";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <Reveal direction="right">
            <SectionHeading
              eyebrow="Contact"
              title="Interested in working together?"
              description="I'm always open to discussing new opportunities, interesting projects, or simply connecting with fellow developers."
            />
          </Reveal>

          <Reveal delay={0.15}>
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
          </Reveal>

          <Reveal delay={0.25}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
