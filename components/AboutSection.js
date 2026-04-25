import React from "react";

function AboutSection() {
  return (
    <section className="section-about" id="about">
      <div className="shell">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">The ArcSolis Difference</p>
            <h2>Engineering advisors rooted in the field.</h2>
            <div className="about-text-grid">
              <p>
                ArcSolis brings engineers, project leaders and designers together
                around one job: helping you reach better outcomes on complex
                industrial developments.
              </p>
              <p className="text-muted">
                We work across West Africa with operators, investors and EPC teams
                who want strong independent views without the heavy overhead of
                global firms.
              </p>
            </div>
            <ul className="about-list">
              {[
                "Vendor neutral advice across studies and FEED.",
                "Experience on both greenfield and brownfield projects.",
                "Clear technical outputs that speak to commercial leads."
              ].map((item, idx) => (
                <li key={idx} className="about-list-item">
                  <div className="about-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-media-wrap">
            <div className="about-media-box">
              <img 
                src="/project-oversight.jpg" 
                alt="Engineers reviewing project blueprints" 
                className="about-image" 
              />
            </div>
            <div className="about-badge">Project Oversight</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
