import React from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function AboutSection() {
  return (
    <MotionSection className="section-about" id="about" direction="right">
      <div className="shell">
        <MotionGroup className="about-grid" staggerChildren={0.12}>
          <MotionGroup className="about-copy" staggerChildren={0.1}>
            <MotionItem as="p" className="eyebrow" direction="left" distance={24}>
              The ArcSolis Difference
            </MotionItem>
            <MotionItem as="h2" direction="left" distance={38}>
              Engineering advisors rooted in the field.
            </MotionItem>
            <MotionGroup className="about-text-grid" staggerChildren={0.08}>
              <MotionItem as="p" direction="left" distance={24}>
                ArcSolis brings engineers, project leaders and designers together
                around one job: helping you reach better outcomes on complex
                industrial developments.
              </MotionItem>
              <MotionItem as="p" className="text-muted" direction="left" distance={24}>
                We work across West Africa with operators, investors and EPC teams
                who want strong independent views without the heavy overhead of
                global firms.
              </MotionItem>
            </MotionGroup>
            <MotionGroup as="ul" className="about-list" staggerChildren={0.08} delayChildren={0.12}>
              {[
                "Vendor neutral advice across studies and FEED.",
                "Experience on both greenfield and brownfield projects.",
                "Clear technical outputs that speak to commercial leads."
              ].map((item, idx) => (
                <MotionItem
                  key={idx}
                  as="li"
                  className="about-list-item"
                  direction="left"
                  distance={20}
                >
                  <div className="about-dot" />
                  {item}
                </MotionItem>
              ))}
            </MotionGroup>
          </MotionGroup>
          <MotionItem className="about-media-wrap" direction="right" distance={46}>
            <div className="about-media-box">
              <img 
                src="/project-oversight.jpg" 
                alt="Engineers reviewing project blueprints" 
                className="about-image" 
              />
            </div>
            <div className="about-badge">Project Oversight</div>
          </MotionItem>
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default AboutSection;
