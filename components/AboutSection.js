function AboutSection() {
  return (
    <section className="section section-about">
      <div className="shell about-shell">
        <div className="about-media" aria-hidden="true" />
        <div className="about-copy">
          <p className="eyebrow">Why ArcSolis</p>
          <h2>One partner across pixels and concrete.</h2>
          <p>
            ArcSolis blends product managers, designers, software engineers and
            technical leads with experience in built environments. The mix
            reduces gaps between interface, infrastructure and field work.
          </p>
          <p>
            Teams in Lagos, Abuja and across West Africa work with us when
            digital systems, equipment and spaces need to line up without slow
            handoffs.
          </p>
          <ul className="about-list">
            <li>Vendor neutral advice across tools, platforms and suppliers.</li>
            <li>
              Product thinking that respects engineering realities and delivery
              schedules.
            </li>
            <li>
              Transparent reporting so sponsors follow scope, budget and impact
              in one view.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
