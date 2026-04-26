import React from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function StoriesSection() {
  const stories = [
    {
      title: "Gas processing expansion review",
      meta: "Upstream Infrastructure",
      text: "We reviewed process schemes, piping layouts and control philosophy then flagged interfaces that threatened schedule and uptime."
    },
    {
      title: "Offshore tie-in concept support",
      meta: "Subsea & Marine",
      text: "Our team challenged assumptions on routing, access and constructability so the client moved forward with confidence on a major brownfield link."
    },
    {
      title: "Terminal automation upgrade",
      meta: "Midstream Controls",
      text: "We helped define scope, reviewed vendor proposals and guided cut-over planning for a busy export terminal in the Delta."
    }
  ];

  return (
    <MotionSection className="section-stories" id="stories" direction="left">
      <div className="shell">
        <MotionGroup className="section-header" staggerChildren={0.1}>
          <MotionItem as="p" className="eyebrow" direction="left" distance={24}>
            Case Studies
          </MotionItem>
          <MotionItem as="h2" className="section-title" direction="left" distance={38}>
            Selected Mandates.
          </MotionItem>
        </MotionGroup>

        <MotionGroup className="card-grid" staggerChildren={0.12} delayChildren={0.14}>
          {stories.map((story, idx) => (
            <MotionItem
              key={idx}
              as="article"
              className="story-card"
              direction={idx % 2 === 0 ? "left" : "right"}
              distance={30}
            >
              <header className="story-header">
                <span className="story-meta">{story.meta}</span>
                <h3 className="story-title">{story.title}</h3>
              </header>
              <div className="story-body">
                <p className="story-text">{story.text}</p>
              </div>
            </MotionItem>
          ))}
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default StoriesSection;
