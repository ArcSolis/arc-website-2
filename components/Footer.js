import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand-info">
            <a href="#top" className="brand">
              <img
                src="/arcsolis-logo.png"
                alt="ArcSolis logo"
                className="brand-mark"
              />
            </a>
            <p className="footer-description">
              Technical advisory and engineering consulting for complex energy infrastructure projects. High-leverage expertise for rigorous delivery.
            </p>
            <div className="footer-contact-details">
              <p>22, Samora Machel Street, Asokoro, Abuja.</p>
              <p><a href="mailto:info@arc-solis.com">info@arc-solis.com</a></p>
              <p><a href="tel:+2347087862502">+234 708 786 2502</a></p>
            </div>
          </div>
          
          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <h4>Platform</h4>
              <ul>
                <li><a href="#process">Methodology</a></li>
                <li><a href="#about">Capabilities</a></li>
                <li><a href="#stories">Case Studies</a></li>
                <li><a href="#insights">Insights</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4>Technical Updates</h4>
              <p>Brief notes on engineering risk and delivery methodology.</p>
              <form
                className="footer-subscribe-form"
                action="https://formspree.io/f/mgegdgqe"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
                <button type="submit">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {year} ArcSolis Limited. All rights reserved.</p>
          </div>
          <div className="footer-social-meta">
            <a href="https://www.arc-solis.com" target="_blank" rel="noreferrer">
              arc-solis.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
