import React from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <MotionSection as="footer" className="site-footer" direction="right">
      <div className="shell">
        <MotionGroup className="footer-top" staggerChildren={0.12}>
          <MotionGroup className="footer-brand-info" staggerChildren={0.08}>
            <MotionItem direction="left" distance={24}>
              <a href="#top" className="brand">
                <img
                  src="/arcsolis-logo.png"
                  alt="ArcSolis logo"
                  className="brand-mark"
                />
              </a>
            </MotionItem>
            <MotionItem as="p" className="footer-description" direction="left" distance={24}>
              Technical advisory and engineering consulting for complex energy infrastructure projects. High-leverage expertise for rigorous delivery.
            </MotionItem>
            <MotionItem className="footer-contact-details" direction="left" distance={24}>
              <p>22, Samora Machel Street, Asokoro, Abuja.</p>
              <p><a href="mailto:info@arc-solis.com">info@arc-solis.com</a></p>
              <p><a href="tel:+2347087862502">+234 708 786 2502</a></p>
            </MotionItem>
          </MotionGroup>

          <MotionItem className="footer-nav-grid" direction="right" distance={30}>
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
          </MotionItem>
        </MotionGroup>

        <MotionItem className="footer-bottom" direction="up" distance={24}>
          <div className="footer-legal">
            <p>&copy; {year} ArcSolis Limited. All rights reserved.</p>
          </div>
        </MotionItem>
      </div>
    </MotionSection>
  );
}

export default Footer;
