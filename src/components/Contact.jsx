function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <p className="section-label">06 — CONTACT</p>

        <div className="contact-content">
          <h2>Let's build something useful.</h2>

          <p>
            I'm open to software engineering opportunities, interesting
            technical projects, and conversations around backend
            engineering, automation, and AI.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:nirajnale333@gmail.com"
              className="button button-primary"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/nirajnale/"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              LinkedIn ↗
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
        </div>
      </div>
    </section>
  )
}

export default Contact
