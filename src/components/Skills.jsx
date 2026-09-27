function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="section-label">02 — SKILLS</p>

        <div className="section-heading">
          <h2>Technical toolkit.</h2>

          <p>
            Technologies and engineering concepts I work with.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <p>Python, Java, C++, C, SQL</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>
              REST APIs, Django, Spring Boot, JDBC, AsyncIO
            </p>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <p>PostgreSQL, MySQL</p>
          </div>

          <div className="skill-card">
            <h3>AI / ML</h3>
            <p>
              TensorFlow, Keras, LLM Integration, RAG
            </p>
          </div>

          <div className="skill-card">
            <h3>Engineering</h3>
            <p>
              OOP, Data Structures, Algorithms, Modular Architecture,
              SDLC
            </p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>
              Git, GitHub, Linux, Docker, Postman, Cron
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
