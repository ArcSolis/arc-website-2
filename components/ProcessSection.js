import React from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

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
    <MotionSection className="section section-process" id="process" direction="left">
      <div className="shell">
        <MotionGroup className="section-header" staggerChildren={0.1}>
          <MotionItem as="p" className="eyebrow" direction="left" distance={24}>
            Methodology
          </MotionItem>
          <MotionItem as="h2" className="section-title" direction="left" distance={38}>
            A rigorous path to project stability.
          </MotionItem>
          <MotionItem as="p" className="section-intro" direction="left" distance={28}>
            Technical consulting requires a predictable rhythm. We move through
            five distinct phases to ensure every decision is grounded in data
            and field reality.
          </MotionItem>
        </MotionGroup>

        <MotionGroup as="ol" className="process-grid" staggerChildren={0.1} delayChildren={0.14}>
          {steps.map((item, idx) => (
            <MotionItem
              key={idx}
              as="li"
              className="process-step"
              direction={idx % 2 === 0 ? "left" : "right"}
              distance={34}
            >
              <span className="process-step-label">Phase {item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </MotionItem>
          ))}
          <MotionItem as="li" className="process-step filler" direction="right" distance={34}>
            <p className="filler-text">Technical excellence by design.</p>
          </MotionItem>
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default ProcessSection;
