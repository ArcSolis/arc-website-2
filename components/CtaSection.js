import { Button } from "./ui/button";
import React from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function CtaSection() {
  return (
    <MotionSection className="section section-cta" id="contact" direction="right">
      <div className="shell">
        <MotionGroup className="cta-container" staggerChildren={0.12}>
          <MotionGroup className="cta-header" staggerChildren={0.1}>
            <MotionItem as="p" className="eyebrow" direction="left" distance={24}>
              Technical Advisory
            </MotionItem>
            <MotionItem as="h2" className="section-title" direction="left" distance={38}>
              Schedule a deep-dive.
            </MotionItem>
            <MotionItem as="p" className="cta-intro" direction="left" distance={28}>
              Briefly describe your project requirements below. Our technical lead will review and respond within 48 hours with a structured approach.
            </MotionItem>
          </MotionGroup>

          <MotionItem
            as="form"
            className="cta-form-technical"
            action="https://formspree.io/f/xeqybpna"
            method="POST"
            direction="right"
            distance={42}
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
              <Button type="submit" variant="primary" className="btn-wide">
                Submit Consultation Request
              </Button>
            </div>
          </MotionItem>
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default CtaSection;
