import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">03 — PROJECTS</p>

        <div className="section-heading">
          <h2>Selected work.</h2>

          <p>
            A curated selection of software engineering, automation,
            systems, and AI projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card ${
                project.featured ? 'featured' : ''
              }`}
            >
              <span className="project-number">
                {project.number}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View Project ↗
              </a>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/nirajnale"
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            Explore GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
