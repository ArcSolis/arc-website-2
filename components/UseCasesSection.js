import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

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
    <section className="section-use-cases" id="solutions">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title">Capabilities.</h2>
        </div>

        <div className="use-case-grid">
          {capabilities.map((item, idx) => (
            <article key={idx} className="use-case-card">
              <h3 className="use-case-title">{item.title}</h3>
              <p className="use-case-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;

