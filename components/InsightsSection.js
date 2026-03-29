function InsightsSection() {
  return (
    <section className="section section-insights" id="insights">
      <div className="shell">
        <p className="eyebrow center">Insights and resources</p>
        <h2 className="section-title center">
          Guides for digital and built projects.
        </h2>
        <div className="card-grid insights-grid">
          <article className="insight-card">
            <h3>Scoping software with real world touchpoints</h3>
            <p>
              Questions to ask when products link to hardware, sites or
              onground teams.
            </p>
            <a href="#contact" className="insight-link">
              Request this guide
            </a>
          </article>
          <article className="insight-card">
            <h3>Joining product design with engineering drawings</h3>
            <p>
              Simple habits for smoother handover between interface work and
              technical design.
            </p>
            <a href="#contact" className="insight-link">
              Speak with a lead
            </a>
          </article>
          <article className="insight-card">
            <h3>Vendor neutral contracting playbook</h3>
            <p>
              Practical steps for structuring work with suppliers while you
              keep control of direction.
            </p>
            <a href="#contact" className="insight-link">
              See a sample pack
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
