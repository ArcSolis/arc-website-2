import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a href="#top" className="brand">
          <img
            src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/d0d5f83b-bae3-4df6-ba20-b95d30aec4c0"
            alt="ArcSolis logo"
            className="brand-mark"
          />
          <span className="brand-text">ArcSolis</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          type="button"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={`nav${navOpen ? " open" : ""}`} aria-label="Main">
          <a href="#solutions">Services</a>
          <a href="#process">Process</a>
          <a href="#stories">Work</a>
          <a href="#insights">Insights</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="nav-cta">
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
