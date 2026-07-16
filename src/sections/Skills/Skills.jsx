import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { skillsData } from "../../data/skillsData";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with."
          description="Over the years, I've worked across frontend, backend, databases, tooling, and modern AI-assisted development workflows."
        />

        <div className="skills__grid">
          {skillsData.map((group) => (
            <article key={group.id} className="skills-card">
              <h3 className="skills-card__title">
                {group.category}
              </h3>

              <div className="skills-card__list">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skills-card__badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;