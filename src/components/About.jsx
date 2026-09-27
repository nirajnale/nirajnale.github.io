function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">01 — ABOUT</p>

        <div className="section-heading">
          <h2>Building software with purpose.</h2>

          <p>
            A software engineering portfolio focused on backend
            development, automation, systems programming, and AI.
          </p>
        </div>

        <div className="about-grid">
          <div>
            <p>
              I enjoy turning ideas into working software — from backend
              automation platforms and data pipelines to systems-level
              projects and machine learning applications.
            </p>

            <p>
              My engineering interests span Python, Java, C++, databases,
              APIs, automation, algorithms, and artificial intelligence.
            </p>
          </div>

          <div className="about-card">
            <div>
              <span>Focus</span>
              <strong>Backend Engineering</strong>
            </div>

            <div>
              <span>Languages</span>
              <strong>Python · Java · C++ · C</strong>
            </div>

            <div>
              <span>Interests</span>
              <strong>Automation · AI · Systems</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
