import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

import React from "react";

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
    <section className="section-stories" id="stories">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Case Studies</p>
          <h2 className="section-title">Selected Mandates.</h2>
        </div>

        <div className="card-grid">
          {stories.map((story, idx) => (
            <article key={idx} className="story-card">
              <header className="story-header">
                <span className="story-meta">{story.meta}</span>
                <h3 className="story-title">{story.title}</h3>
              </header>
              <div className="story-body">
                <p className="story-text">{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoriesSection;

