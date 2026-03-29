function StoriesSection() {
  return (
    <section className="section section-stories" id="stories">
      <div className="shell">
        <p className="eyebrow center">Selected work</p>
        <h2 className="section-title center">Examples from recent projects.</h2>

        <div className="card-grid">
          <article className="story-card">
            <h3>Operations platform for a logistics group</h3>
            <p className="story-meta">Product design and software delivery</p>
            <p>
              We shaped journeys, interfaces and a modular architecture for a
              web platform that tracks fleets, warehouses and field teams in one
              place.
            </p>
          </article>
          <article className="story-card">
            <h3>Mixed use estate infrastructure</h3>
            <p className="story-meta">Engineering design and coordination</p>
            <p>
              Our team produced drawings, schedules and control logic for power
              and services, then worked with contractors to keep work aligned
              with design intent.
            </p>
          </article>
          <article className="story-card">
            <h3>Fintech product launch</h3>
            <p className="story-meta">Strategy, UX and build support</p>
            <p>
              We partnered with founders on flows, interfaces and technology
              choices then guided delivery sprints through launch and early
              growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StoriesSection;
