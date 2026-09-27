function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <p className="eyebrow">SOFTWARE ENGINEER</p>

        <h1>
          Niraj <span>Nale</span>
        </h1>

        <h2>
          Backend Engineering · Python · Java · C++ · AI
        </h2>

        <p className="hero-description">
          I build backend systems, automation platforms, and software
          projects with a focus on clean architecture, problem solving,
          and practical engineering.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View Projects
          </a>

          <a
            href="https://github.com/nirajnale"
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-meta">
          <span>Python</span>
          <span>Java</span>
          <span>C++</span>
          <span>Backend</span>
          <span>AI</span>
        </div>
      </div>
    </section>
  )
}

export default Hero