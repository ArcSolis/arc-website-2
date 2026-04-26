import React from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function InsightsSection() {
  const insights = [
    {
      title: "Stage gate reviews that help",
      description: "A simple checklist for making stage gate meetings useful for project leaders.",
      linkText: "Request the checklist"
    },
    {
      title: "Working with brownfield constraints",
      description: "Practical patterns for changes on live plants without surprise downtime.",
      linkText: "Speak with an advisor"
    },
    {
      title: "Independent reviews with clear output",
      description: "How we structure findings so your team moves from insight to action quickly.",
      linkText: "See a sample pack"
    }
  ];

  return (
    <MotionSection className="section-insights" id="insights" direction="left">
      <div className="shell">
        <MotionGroup className="section-header" staggerChildren={0.1}>
          <MotionItem as="p" className="eyebrow" direction="left" distance={24}>
            Resources
          </MotionItem>
          <MotionItem as="h2" className="section-title" direction="left" distance={38}>
            Technical Insights.
          </MotionItem>
        </MotionGroup>

        <MotionGroup className="insights-grid" staggerChildren={0.12} delayChildren={0.16}>
          {insights.map((item, idx) => (
            <MotionItem
              key={idx}
              as="article"
              className="insight-card"
              direction={idx % 2 === 0 ? "left" : "right"}
              distance={30}
            >
              <span className="technical-note">Technical Note</span>
              <div className="insight-type">Insight</div>
              <h3 className="insight-title">{item.title}</h3>
              <p className="insight-description">{item.description}</p>
              <a href="#contact" className="insight-link">
                <span>{item.linkText}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </MotionItem>
          ))}
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default InsightsSection;
