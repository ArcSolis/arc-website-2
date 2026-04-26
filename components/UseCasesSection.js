import React from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function UseCasesSection() {
  const capabilities = [
    {
      title: "Concept & Feasibility",
      description: "Independent engineering review of early-stage studies before major capital commitments."
    },
    {
      title: "FEED & Design Support",
      description: "Rigorous review of deliverables, comment logs and multi-discipline interfaces."
    },
    {
      title: "Brownfield Modifications",
      description: "Verification of tie-ins, shutdown windows and constructability in live environments."
    },
    {
      title: "Vendor Selection",
      description: "Support for technical scope definition and objective bid evaluation for major packages."
    },
    {
      title: "Project Recovery",
      description: "Technical diagnostic of schedule slippage with focused action plans for value protection."
    },
    {
      title: "Operations Handover",
      description: "Commissioning support to ensure smooth transition from construction to stable operations."
    }
  ];

  return (
    <MotionSection className="section-use-cases" id="solutions" direction="right">
      <div className="shell">
        <MotionGroup className="section-header" staggerChildren={0.1}>
          <MotionItem as="p" className="eyebrow" direction="right" distance={24}>
            Expertise
          </MotionItem>
          <MotionItem as="h2" className="section-title" direction="right" distance={38}>
            Capabilities.
          </MotionItem>
        </MotionGroup>

        <MotionGroup className="use-case-grid" staggerChildren={0.1} delayChildren={0.14}>
          {capabilities.map((item, idx) => (
            <MotionItem
              key={idx}
              as="article"
              className="use-case-card"
              direction={idx % 2 === 0 ? "right" : "left"}
              distance={28}
            >
              <h3 className="use-case-title">{item.title}</h3>
              <p className="use-case-description">{item.description}</p>
            </MotionItem>
          ))}
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default UseCasesSection;
