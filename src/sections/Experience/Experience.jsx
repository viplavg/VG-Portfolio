import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Experience</span>

          <h2 className="section-heading__title">
            Nearly 5 years of building reliable web products.
          </h2>

          <p className="section-heading__description">
            I have worked across frontend and backend development, with a
            strong focus on React applications, reusable architecture,
            performance, and maintainable code.
          </p>
        </div>

        <div className="experience__grid">
          <article className="experience-card">
            <span className="experience-card__value">5+</span>
            <span className="experience-card__label">
              Years of experience
            </span>
          </article>

          <article className="experience-card">
            <span className="experience-card__value">React</span>
            <span className="experience-card__label">
              Core frontend expertise
            </span>
          </article>

          <article className="experience-card">
            <span className="experience-card__value">Node.js</span>
            <span className="experience-card__label">
              Backend and API development
            </span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;