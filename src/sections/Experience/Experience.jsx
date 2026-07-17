import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { experienceData } from "../../data/experienceData";
import Reveal from "../../components/Reveal/Reveal";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <Reveal direction="right">
          <SectionHeading
            eyebrow="Experience"
            title="Building production-grade web applications across industries."
            description="My experience spans frontend architecture, full-stack development, performance optimization, API development, and cross-functional product delivery."
          />
        </Reveal>

        <div className="experience__timeline">
          {experienceData.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 0.08}>
              <article className="experience-item">
                <div className="experience-item__marker" aria-hidden="true" />

                <div className="experience-item__content">
                  <div className="experience-item__header">
                    <div>
                      <h3 className="experience-item__role">
                        {experience.role}
                      </h3>

                      <p className="experience-item__company">
                        {experience.company}
                        <span aria-hidden="true"> • </span>
                        <span>{experience.location}</span>
                      </p>
                    </div>

                    <time className="experience-item__duration">
                      {experience.duration}
                    </time>
                  </div>

                  <ul className="experience-item__highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="experience-item__technologies">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
