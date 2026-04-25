import { Button } from "./ui/button";
import React from "react";

function CtaSection() {
  return (
    <section className="section section-cta" id="contact">
      <div className="shell">
        <div className="cta-container">
          <div className="cta-header">
            <p className="eyebrow">Technical Advisory</p>
            <h2 className="section-title">Schedule a deep-dive.</h2>
            <p className="cta-intro">
              Briefly describe your project requirements below. Our technical lead will review and respond within 48 hours with a structured approach.
            </p>
          </div>
          
          <form
            className="cta-form-technical"
            action="https://formspree.io/f/xeqybpna"
            method="POST"
          >
            <div className="form-technical-grid">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="organisation">Organisation</label>
                <input id="organisation" name="organisation" placeholder="Energy Corp" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Work Email</label>
                <input id="email" type="email" name="email" placeholder="john@company.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Contact Number</label>
                <input id="phone" name="phone" placeholder="+234 ..." />
              </div>
            </div>
            
            <div className="form-field full-width">
              <label htmlFor="message">Project Requirements / Scope Outline</label>
              <textarea id="message" name="message" rows={5} placeholder="Describe the current stage, technical challenges, and desired outcomes..." required />
            </div>
            
            <div className="form-footer">
              <p className="form-disclaimer">
                By submitting this form, you agree to our privacy policy and data handling protocols.
              </p>
              <Button variant="primary" className="btn-wide">
                Submit Consultation Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
