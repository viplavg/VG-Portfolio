import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { skillsData } from "../../data/skillsData";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal direction="right">
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with."
            description="Over the years, I've worked across frontend, backend, databases, tooling, and modern AI-assisted development workflows."
          />
        </Reveal>

        <div className="skills__grid">
          {skillsData.map((group, idx) => (
            <Reveal key={group.id} delay={idx * 0.1}>
              <article className="skills-card">
                <h3 className="skills-card__title">{group.category}</h3>

                <div className="skills-card__list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skills-card__badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
