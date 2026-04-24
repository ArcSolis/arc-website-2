function HeroSection({ onScrollToProcess }) {
  return (
    <section className="hero" id="solutions">
      <div className="hero-bg-gradient" aria-hidden="true" />
      <div className="shell hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Software, product and engineering</p>
          <h1>
            Ship digital products and infrastructure with one partner across
            software and engineering.
          </h1>
          <p className="lead">
            ArcSolis is a studio with roots in Lagos and Abuja. We combine
            product strategy, software development, engineering design and
            general contracting so teams move from sketch to launch without
            friction.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn primary">
              Talk to our team
            </a>
            <button
              type="button"
              className="btn ghost"
              onClick={onScrollToProcess}
            >
              See how delivery works
            </button>
          </div>
          <dl className="hero-metrics" aria-label="Service highlights">
            <div>
              <dt>4</dt>
              <dd>
                Core disciplines across software, design, engineering and site
                delivery.
              </dd>
            </div>
            <div>
              <dt>End to end</dt>
              <dd>From first wireframe through signed contract and handover.</dd>
            </div>
            <div>
              <dt>One team</dt>
              <dd>Digital and physical workstreams stay inside one partnership.</dd>
            </div>
          </dl>
        </div>
        <aside className="hero-panel" aria-label="Delivery snapshot">
          <div className="hero-panel-card">
            <h2>Platform and site view</h2>
            <p className="hero-panel-meta">
              A joined picture across product backlogs, drawings and field work.
            </p>
            <div className="hero-panel-chart">
              <div className="hero-panel-bar hero-panel-bar--solar" />
              <div className="hero-panel-bar hero-panel-bar--battery" />
              <div className="hero-panel-bar hero-panel-bar--grid" />
            </div>
            <ul className="hero-panel-stats">
              <li>
                <span>Software</span>
                <strong>Product roadmap and sprints</strong>
              </li>
              <li>
                <span>Engineering</span>
                <strong>Drawings and coordination</strong>
              </li>
              <li>
                <span>Delivery</span>
                <strong>Contracting and field progress</strong>
              </li>
            </ul>
            <p className="hero-panel-footnote">
              Dashboards align product owners, engineers and site teams around
              one source of truth.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
