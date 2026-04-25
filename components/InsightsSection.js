import React from "react";

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
    <section className="section-insights" id="insights">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Resources</p>
          <h2 className="section-title">Technical Insights.</h2>
        </div>

        <div className="insights-grid">
          {insights.map((item, idx) => (
            <article key={idx} className="insight-card">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
