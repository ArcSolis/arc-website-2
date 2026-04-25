import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a href="#top" className="brand">
          <img
            src="/arcsolis-logo.png"
            alt="ArcSolis logo"
            className="brand-mark"
          />
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
          <a href="#solutions" onClick={() => setNavOpen(false)}>Services</a>
          <a href="#process" onClick={() => setNavOpen(false)}>Process</a>
          <a href="#stories" onClick={() => setNavOpen(false)}>Work</a>
          <a href="#insights" onClick={() => setNavOpen(false)}>Insights</a>
          <a href="#faq" onClick={() => setNavOpen(false)}>FAQ</a>
          <a href="#contact" className="nav-cta" onClick={() => setNavOpen(false)}>
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
