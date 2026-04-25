import { Button } from "./ui/button";
import { GeometricShapes } from "./ui/GeometricShapes";

function HeroSection({ onScrollToProcess }) {
  return (
    <section className="hero" id="hero">
      <GeometricShapes />
      <div className="shell hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Engineering Advisory</p>
          <h1>Sharper decisions on complex projects.</h1>
          <p className="lead">
            ArcSolis helping technical teams review concepts, challenge designs, and maintain architectural integrity on energy infrastructure developments.
          </p>
          <div className="hero-actions">
            <Button href="#contact" variant="primary">
              Speak with an Engineer
            </Button>
            <Button
              variant="outline"
              onClick={onScrollToProcess}
            >
              Our Methodology
            </Button>
          </div>
        </div>
        
        <aside className="hero-panel" aria-label="Project Intelligence">
          <div className="hero-panel-card">
            <div className="panel-header">
              <div className="panel-title">
                <h3>Project Intelligence</h3>
                <p>Facilities Risk Index</p>
              </div>
              <div className="panel-status">Live</div>
            </div>

            <div className="panel-viz-grid">
              {[0.8, 0.6, 0.9, 0.4, 0.7, 0.85].map((val, i) => (
                <div key={i} className="viz-bar-wrap">
                  <div 
                    className="viz-bar-fill" 
                    style={{ height: `${val * 100}%` }} 
                  />
                </div>
              ))}
            </div>

            <div className="panel-metrics-list">
              {[
                { label: "Technical", value: "Design Basis Verified" },
                { label: "Interface", value: "Clarity Confirmed" },
                { label: "Risk", value: "Mitigation Active" }
              ].map((item, i) => (
                <div key={i} className="panel-metric-item">
                  <span className="metric-label">{item.label}</span>
                  <span className="metric-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
