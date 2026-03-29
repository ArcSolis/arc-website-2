function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell footer-shell">
        <div className="footer-brand-block">
          <img
            src="/arcsolis-logo.svg"
            alt="ArcSolis logo"
            className="footer-logo"
          />
          <p>
            ArcSolis Limited brings software, product design, engineering design
            and general contracting support into one focused partner.
          </p>
        </div>
        <div className="footer-columns">
          <div>
            <h3>Contact</h3>
            <p>
              22, Samora Machel Street,
              <br />
              Asokoro, Abuja.
            </p>
            <p>
              <a href="mailto:info@arc-solis.com">info@arc-solis.com</a>
              <br />
              <a href="tel:+2347087862502">+234 708 786 2502</a>
            </p>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="#solutions">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#stories">Work</a>
              </li>
              <li>
                <a href="#contact">Start a project</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Stay informed</h3>
            <p>
              Sign up to receive occasional notes on product, software and
              engineering delivery.
            </p>
            <form
              className="footer-form"
              action="https://formspree.io/f/mgegdgqe"
              method="POST"
            >
              <label>
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <button type="submit" className="btn secondary full">
                Get updates
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell footer-bottom-shell">
          <p>&copy; {year} ArcSolis Limited. All rights reserved.</p>
          <p>
            <a
              href="https://www.arc-solis.com"
              target="_blank"
              rel="noreferrer"
            >
              www.arc-solis.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
