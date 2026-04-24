function ProcessSection() {
  return (
    <section className="section section-process" id="process">
      <div className="shell">
        <p className="eyebrow center">Our approach</p>
        <h2 className="section-title center">
          Every engagement follows a clear build rhythm.
        </h2>
        <p className="section-intro center">
          We move from discovery to delivery in stages so teams know what comes
          next and why.
        </p>

        <ol className="process-grid" aria-label="ArcSolis delivery process">
          <li className="process-step">
            <span className="process-step-label">Step 1</span>
            <h3>Discovery and framing</h3>
            <p>
              We align on goals, constraints, existing systems and success
              signals across product, engineering and business.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 2</span>
            <h3>Product and experience design</h3>
            <p>
              We map journeys, wireframes and interface flows then move into
              visual design that reflects your brand.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 3</span>
            <h3>Software and engineering design</h3>
            <p>
              We translate product direction into technical architecture,
              detailed drawings and implementation plans.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 4</span>
            <h3>Build and contracting</h3>
            <p>
              Our team leads software delivery, coordinates partners and manages
              general contracting for on site work.
            </p>
          </li>
          <li className="process-step">
            <span className="process-step-label">Step 5</span>
            <h3>Support and evolution</h3>
            <p>
              We monitor performance, refine experiences and plan the next
              release or construction phase with you.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default ProcessSection;
