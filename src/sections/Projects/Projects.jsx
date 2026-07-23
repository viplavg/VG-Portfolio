import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { projectsData } from "../../data/projectsData";
import Reveal from "../../components/Reveal/Reveal";
import "./Projects.css";

const Projects = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);

  const otherProjects = projectsData.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal direction="right">
          <SectionHeading
            eyebrow="Projects"
            title="Projects I've built and continue to improve."
            description="A collection of full-stack applications focused on real-world workflows, scalability, and user experience."
          />
        </Reveal>

        <div className="projects__featured">
          {featuredProjects.map((project, index) => {
            const hasProjectLinks = project.githubUrl || project.liveUrl;

            return (
              <Reveal key={project.id} delay={index * 0.1}>
                <article className="project-card">
                  <div className="project-card__content">
                    <p className="project-card__label">Featured Project</p>

                    <h3 className="project-card__title">{project.title}</h3>

                    <p className="project-card__description">
                      {project.description}
                    </p>

                    <div className="project-card__technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {project.demoNote && (
                      <p className="project-card__demo-note">
                        <strong>Live Demo Notice:</strong> {project.demoNote}
                      </p>
                    )}

                    {hasProjectLinks && (
                      <div className="project-card__actions">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {otherProjects.length > 0 && (
          <div className="projects__other">
            <h3 className="projects__other-title">Other Projects</h3>

            {otherProjects.map((project, idx) => {
              const hasProjectLinks = project.githubUrl || project.liveUrl;

              return (
                <Reveal key={project.id} delay={idx * 0.1}>
                  <article className="project-card project-card--compact">
                    <h4 className="project-card__title">{project.title}</h4>

                    <p className="project-card__description">
                      {project.description}
                    </p>

                    <div className="project-card__technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {hasProjectLinks && (
                      <div className="project-card__actions">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
