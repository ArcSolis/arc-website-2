import { Button } from "./ui/button";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

function HeroSection({ onScrollToProcess }) {
  return (
    <MotionSection
      as="section"
      className="hero"
      id="hero"
      mode="mount"
      direction="up"
      distance={24}
      duration={0.8}
    >
      <div className="shell hero-shell">
        <MotionGroup
          className="hero-copy"
          mode="mount"
          staggerChildren={0.14}
          delayChildren={0.18}
        >
          <MotionItem as="p" className="eyebrow" direction="left" distance={28}>
            Engineering Advisory
          </MotionItem>
          <MotionItem as="h1" direction="left" distance={48}>
            Sharper decisions on complex projects.
          </MotionItem>
          <MotionItem as="p" className="lead" direction="left" distance={36}>
            ArcSolis helping technical teams review concepts, challenge designs, and maintain architectural integrity on energy infrastructure developments.
          </MotionItem>
          <MotionGroup
            className="hero-actions"
            mode="mount"
            staggerChildren={0.1}
            delayChildren={0.42}
          >
            <MotionItem direction="left" distance={24}>
              <Button href="#contact" variant="primary">
                Speak with an Engineer
              </Button>
            </MotionItem>
            <MotionItem direction="left" distance={24}>
              <Button
                variant="outline"
                onClick={onScrollToProcess}
              >
                Our Methodology
              </Button>
            </MotionItem>
          </MotionGroup>
        </MotionGroup>

        <MotionItem
          as="aside"
          className="hero-panel"
          aria-label="Project Intelligence"
          direction="right"
          distance={64}
          delay={0.16}
          duration={0.9}
        >
          <MotionGroup
            className="hero-panel-card"
            mode="mount"
            staggerChildren={0.1}
            delayChildren={0.34}
          >
            <div className="panel-header">
              <div className="panel-title">
                <h3>Project Intelligence</h3>
                <p>Facilities Risk Index</p>
              </div>
              <div className="panel-status">Live</div>
            </div>

            <div className="panel-viz-grid">
              {[0.8, 0.6, 0.9, 0.4, 0.7, 0.85].map((val, i) => (
                <MotionItem
                  key={i}
                  className="viz-bar-wrap"
                  direction="up"
                  distance={18}
                  duration={0.55}
                >
                  <div 
                    className="viz-bar-fill" 
                    style={{ height: `${val * 100}%` }} 
                  />
                </MotionItem>
              ))}
            </div>

            <MotionGroup
              className="panel-metrics-list"
              mode="mount"
              staggerChildren={0.08}
              delayChildren={0.48}
            >
              {[
                { label: "Technical", value: "Design Basis Verified" },
                { label: "Interface", value: "Clarity Confirmed" },
                { label: "Risk", value: "Mitigation Active" }
              ].map((item, i) => (
                <MotionItem key={i} className="panel-metric-item" direction="right" distance={18}>
                  <span className="metric-label">{item.label}</span>
                  <span className="metric-value">{item.value}</span>
                </MotionItem>
              ))}
            </MotionGroup>
          </MotionGroup>
        </MotionItem>
      </div>
    </MotionSection>
  );
}

export default HeroSection;
