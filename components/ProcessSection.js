import React from "react";

function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Framing",
      text: "We listen to your objectives and constraints then map the critical engineering questions worth answering."
    },
    {
      step: "02",
      title: "Technical Review",
      text: "Multi-discipline specialists review drawings, models and schedules with a focus on major risks and interfaces."
    },
    {
      step: "03",
      title: "Options & Impacts",
      text: "We highlight tradeoffs and propose technical options in language that supports fast commercial decisions."
    },
    {
      step: "04",
      title: "Field Support",
      text: "Our team joins design reviews, vendor meetings and site calls to keep technical actions moving forward."
    },
    {
      step: "05",
      title: "Long-term Advisory",
      text: "We stay close as the project moves through execution so the original technical intent is never lost."
    }
  ];

  return (
    <section className="section section-process" id="process">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Methodology</p>
          <h2 className="section-title">A rigorous path to project stability.</h2>
          <p className="section-intro">
            Technical consulting requires a predictable rhythm. We move through
            five distinct phases to ensure every decision is grounded in data
            and field reality.
          </p>
        </div>

        <ol className="process-grid">
          {steps.map((item, idx) => (
            <li key={idx} className="process-step">
              <span className="process-step-label">Phase {item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
          <li className="process-step filler">
            <p className="filler-text">Technical excellence by design.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default ProcessSection;

