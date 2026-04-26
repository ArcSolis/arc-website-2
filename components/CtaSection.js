"use client";

import { Button } from "./ui/button";
import React, { useState } from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function CtaSection() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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
            onSubmit={handleSubmit}
          >
            <div className="form-technical-grid">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" placeholder="John Doe" required disabled={status === "submitting" || status === "success"} />
              </div>
              <div className="form-field">
                <label htmlFor="organisation">Organisation</label>
                <input id="organisation" name="organisation" placeholder="Energy Corp" disabled={status === "submitting" || status === "success"} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Work Email</label>
                <input id="email" type="email" name="email" placeholder="john@company.com" required disabled={status === "submitting" || status === "success"} />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Contact Number</label>
                <input id="phone" name="phone" placeholder="+234 ..." disabled={status === "submitting" || status === "success"} />
              </div>
            </div>
            
            <div className="form-field full-width">
              <label htmlFor="message">Project Requirements / Scope Outline</label>
              <textarea id="message" name="message" rows={5} placeholder="Describe the current stage, technical challenges, and desired outcomes..." required disabled={status === "submitting" || status === "success"} />
            </div>
            
            <div className="form-footer" style={{ alignItems: "flex-start" }}>
              <p className="form-disclaimer">
                By submitting this form, you agree to our privacy policy and data handling protocols.
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <Button variant="primary" className="btn-wide" type="submit" disabled={status === "submitting" || status === "success"}>
                  {status === "submitting" ? "Submitting..." : status === "success" ? "Submitted" : "Submit Consultation Request"}
                </Button>
                {status === "success" && (
                  <p style={{ color: "#10b981", fontSize: "0.85rem", marginTop: "12px", marginBottom: 0, textAlign: "right", maxWidth: "240px" }}>
                    Request submitted successfully. We will be in touch within 48 hours.
                  </p>
                )}
                {status === "error" && (
                  <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "12px", marginBottom: 0, textAlign: "right", maxWidth: "240px" }}>
                    An error occurred. Please try again.
                  </p>
                )}
              </div>
            </div>
          </MotionItem>
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default CtaSection;
