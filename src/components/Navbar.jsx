function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo" aria-label="Niraj Nale home">
          NN
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://github.com/nirajnale"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}

export default Navbar