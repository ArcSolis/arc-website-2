import { Button } from "./ui/button";

function HeroSection({ onScrollToProcess }) {
  return (
    <section className="hero" id="solutions">
      <div className="hero-bg-gradient" aria-hidden="true" />
      <div className="shell hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Oil and gas engineering consulting</p>
          <h1>
            Sharper decisions on complex projects.
          </h1>
          <p className="lead">
            ArcSolis Limited helps technical teams review concepts, challenge
            designs and keep upstream and midstream work on firm ground.
          </p>
          <div className="hero-actions">
            <Button href="#contact" variant="primary">
              Speak with an engineer
            </Button>
            <Button
              variant="outline"
              onClick={onScrollToProcess}
            >
              See our engagement model
            </Button>
          </div>
          <dl className="hero-metrics" aria-label="ArcSolis focus areas">
            <div>
              <dt>Concept to handover</dt>
              <dd>Support from early studies through commissioning.</dd>
            </div>
            <div>
              <dt>Independent view</dt>
              <dd>Objective advice alongside your internal teams.</dd>
            </div>
            <div>
              <dt>Field aware</dt>
              <dd>Design choices tested against real site conditions.</dd>
            </div>
          </dl>
        </div>
        <aside className="hero-panel" aria-label="Engagement snapshot">
          <div className="hero-panel-card">
            <h2>Project at a glance</h2>
            <p className="hero-panel-meta">
              One view of wells, facilities and schedule risk.
            </p>
            <div className="hero-panel-chart">
              <div className="hero-panel-bar hero-panel-bar--solar" />
              <div className="hero-panel-bar hero-panel-bar--battery" />
              <div className="hero-panel-bar hero-panel-bar--grid" />
            </div>
            <ul className="hero-panel-stats">
              <li>
                <span>Technical</span>
                <strong>Basis of design checks</strong>
              </li>
              <li>
                <span>Commercial</span>
                <strong>Scope and interface clarity</strong>
              </li>
              <li>
                <span>Delivery</span>
                <strong>Risks surfaced early</strong>
              </li>
            </ul>
            <p className="hero-panel-footnote">
              Dashboards align project owners, advisors and contractors around
              the same picture.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
