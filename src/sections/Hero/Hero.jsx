import "./Hero.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiHackerrank } from "react-icons/si";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Hi, I’m Viplav Gupta</span>

          <h1 className="hero__title">
            Full-Stack Engineer
            <span>focused on scalable React products.</span>
          </h1>

          <p className="hero__description">
            I build scalable React applications and modern web products with 5
            years of experience across frontend and backend development.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a
              href="/ViplavGupta_Resume.pdf"
              download="ViplavGupta_Resume.pdf"
              className="btn btn--secondary"
            >
              Download Resume
            </a>
          </div>
          <div className="hero__socials">
            <a
              href="https://github.com/viplavg"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/viplavg/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://www.hackerrank.com/profile/viplavg1999"
              target="_blank"
              rel="noreferrer"
              aria-label="Hackerrank"
            >
              <SiHackerrank />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          {/* Code card yahan banayenge */}
          <div className="hero__code-card">
            <div className="hero__code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre className="hero__code-content">
              {`const developer = {
                    name: "Viplav Gupta",
                    role: "Full-Stack Engineer",
                    experience: "5 Years",
                    skills: [
                        "React",
                        "Node.js",
                        "MongoDB"
                    ]
                    };`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
