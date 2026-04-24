function ProcessSection() {
  return (
    <section className="section section-process" id="process">
      <div className="shell">
        <p className="eyebrow center">How we work</p>
        <h2 className="section-title center">
          A simple rhythm for complex projects.
        </h2>
        <p className="section-intro center">
          Each engagement follows clear stages so your team knows what we are
          working on and what arrives next.
        </p>

        <ol className="process-grid" aria-label="ArcSolis delivery process">
          <li className="process-step">
            <span className="process-step-label">Step 1</span>
            <h3>Discovery and framing</h3>
            <p>
              We listen to your objectives, constraints and current design work
              then map questions worth answering.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 2</span>
            <h3>Technical review</h3>
            <p>
              Multi discipline engineers review drawings, models and schedules
              with a focus on major risks and interfaces.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 3</span>
            <h3>Options and recommendations</h3>
            <p>
              We highlight tradeoffs, propose options and summarise impacts in
              language that supports fast decisions.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 4</span>
            <h3>Implementation support</h3>
            <p>
              Our team joins design reviews, vendor meetings and site calls to
              keep actions moving.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 5</span>
            <h3>Ongoing advisory</h3>
            <p>
              We stay close as the project moves through execution and
              commissioning so decisions stay aligned.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default ProcessSection;
