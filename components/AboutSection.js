function AboutSection() {
  return (
    <section className="section section-about">
      <div className="shell about-shell">
        <div className="about-media" aria-hidden="true" />
        <div className="about-copy">
          <p className="eyebrow">Why ArcSolis</p>
          <h2>Engineering advisors rooted in the field.</h2>
          <p>
            ArcSolis brings engineers, project leaders and designers together
            around one job helping you reach better outcomes on oil and gas
            work.
          </p>
          <p>
            We work across West Africa with operators, investors and EPC teams
            who want strong independent views without heavy overhead.
          </p>
          <ul className="about-list">
            <li>Vendor neutral advice across studies, FEED and detailed design.</li>
            <li>Experience on both greenfield and brownfield projects.</li>
            <li>Clear written outputs that speak to technical and commercial leads.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
