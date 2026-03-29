import Head from "next/head";
import { useState } from "react";

const faqs = [
  {
    question: "What does ArcSolis do?",
    answer:
      "ArcSolis designs and delivers solar, storage and automation systems for organisations that need reliable power and clear financial outcomes.",
  },
  {
    question: "Who is ArcSolis suited for?",
    answer:
      "We work with commercial, industrial and residential estate clients that treat power as a strategic asset, including logistics, healthcare, manufacturing and technology companies.",
  },
  {
    question: "Do you only supply hardware?",
    answer:
      "Our focus is on system design, automation and long term performance. We work with trusted hardware partners, but remain vendor neutral so specifications serve your objectives.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "Most engagements begin with a structured audit where we review energy bills, site layouts and critical processes, then propose scenarios with clear payback ranges.",
  },
  {
    question: "Where is ArcSolis based?",
    answer:
      "Our team is based in Abuja, Nigeria, and we support projects across the country and selected West African locations.",
  },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const year = new Date().getFullYear();

  const scrollToProcess = () => {
    if (typeof document === "undefined") {
      return;
    }
    const target = document.getElementById("process");
    if (!target) {
      return;
    }
    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: "smooth",
    });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>ArcSolis | Solar, Storage &amp; Smart Energy Automation</title>
        <meta
          name="description"
          content="ArcSolis helps organisations design, deploy and automate modern solar and energy systems that save money and keep power always on."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="site-header">
        <div className="shell nav-shell">
          <a href="#top" className="brand">
            <img
              src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/9b833648-e63e-4217-a1bf-9ede7107aefa"
              alt="ArcSolis logo"
              className="brand-mark"
            />
            <span className="brand-text">ArcSolis</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            type="button"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav className={`nav${navOpen ? " open" : ""}`} aria-label="Main">
            <a href="#solutions">Solutions</a>
            <a href="#process">Process</a>
            <a href="#stories">Customer stories</a>
            <a href="#insights">Insights</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav-cta">
              Book solar audit
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="solutions">
          <div className="hero-bg-gradient" aria-hidden="true" />
          <div className="shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Solar, storage &amp; automation</p>
              <h1>
                More uptime and lower energy cost through smart solar design and
                AI automation.
              </h1>
              <p className="lead">
                ArcSolis helps African businesses and estates design reliable
                solar, storage and control systems so you spend less on diesel
                and never pause operations.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn primary">
                  Book a free energy audit
                </a>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={scrollToProcess}
                >
                  See how our process works
                </button>
              </div>
              <dl className="hero-metrics" aria-label="Quick impact numbers">
                <div>
                  <dt>30%</dt>
                  <dd>
                    Average reduction in monthly energy spend after
                    optimisation.
                  </dd>
                </div>
                <div>
                  <dt>99.5%</dt>
                  <dd>
                    Target uptime for mission critical loads in our system
                    designs.
                  </dd>
                </div>
                <div>
                  <dt>3 weeks</dt>
                  <dd>Typical time from audit to implementation start.</dd>
                </div>
              </dl>
            </div>
            <aside className="hero-panel" aria-label="Live project snapshot">
              <div className="hero-panel-card">
                <h2>Lagos HQ energy overview</h2>
                <p className="hero-panel-meta">
                  Live view from the ArcSolis automation dashboard.
                </p>
                <div className="hero-panel-chart">
                  <div className="hero-panel-bar hero-panel-bar--solar" />
                  <div className="hero-panel-bar hero-panel-bar--battery" />
                  <div className="hero-panel-bar hero-panel-bar--grid" />
                </div>
                <ul className="hero-panel-stats">
                  <li>
                    <span>Solar</span>
                    <strong>67% of load</strong>
                  </li>
                  <li>
                    <span>Battery</span>
                    <strong>27% of load</strong>
                  </li>
                  <li>
                    <span>Grid / Gen</span>
                    <strong>6% of load</strong>
                  </li>
                </ul>
                <p className="hero-panel-footnote">
                  Automations keep diesel off except during extreme peaks and
                  protect sensitive equipment from poor power quality.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-process" id="process">
          <div className="shell">
            <p className="eyebrow center">Our approach</p>
            <h2 className="section-title center">
              Every project follows a clear, measurable process.
            </h2>
            <p className="section-intro center">
              You get a system that fits your site, budget and growth plan, not
              an off the shelf kit.
            </p>

            <ol className="process-grid" aria-label="ArcSolis delivery process">
              <li className="process-step">
                <span className="process-step-label">Step 1</span>
                <h3>System audit</h3>
                <p>
                  On site walkthrough, data logging and load profiling for your
                  facility. We map what must stay on and what can be flexible.
                </p>
              </li>
              <li className="process-step">
                <span className="process-step-label">Step 2</span>
                <h3>Design &amp; simulation</h3>
                <p>
                  We design multiple solar, storage and automation options, then
                  run yield and payback simulations before you commit.
                </p>
              </li>
              <li className="process-step">
                <span className="process-step-label">Step 3</span>
                <h3>Installation &amp; commissioning</h3>
                <p>
                  Our team and partners deploy hardware with clear cutover plans
                  so you avoid downtime during migration.
                </p>
              </li>
              <li className="process-step">
                <span className="process-step-label">Step 4</span>
                <h3>Automation &amp; optimisation</h3>
                <p>
                  We connect sensors, meters and control logic, then tune rules
                  so your system responds to tariffs, weather and business
                  priorities.
                </p>
              </li>
              <li className="process-step">
                <span className="process-step-label">Step 5</span>
                <h3>Monitoring &amp; support</h3>
                <p>
                  You receive an operations dashboard, weekly reports and local
                  support to keep performance on track.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section-about">
          <div className="shell about-shell">
            <div className="about-media" aria-hidden="true" />
            <div className="about-copy">
              <p className="eyebrow">Why ArcSolis</p>
              <h2>We design energy systems for African realities.</h2>
              <p>
                Grid instability, diesel price swings and harsh environments
                demand resilient engineering. ArcSolis brings electrical design,
                software and controls expertise together so your plant or estate
                performs in the real world, not only on paper.
              </p>
              <p>
                From Abuja to Lagos and regional industrial hubs, we support
                organisations that cannot afford outages, including hospitals,
                manufacturing, estates and data intensive businesses.
              </p>
              <ul className="about-list">
                <li>Vendor neutral design focused on whole life value.</li>
                <li>
                  Automation that prioritises your critical loads and tariff
                  windows.
                </li>
                <li>
                  Transparent performance reporting so you see gains month by
                  month.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-stories" id="stories">
          <div className="shell">
            <p className="eyebrow center">Customer results</p>
            <h2 className="section-title center">Stories from recent projects.</h2>

            <div className="card-grid">
              <article className="story-card">
                <h3>Logistics warehouse, Abuja</h3>
                <p className="story-meta">Hybrid solar and storage retrofit</p>
                <p>
                  Replaced ageing generators with a 120 kW solar array, battery
                  storage and smart changeover logic, cutting diesel usage by
                  over half while keeping cold rooms stable.
                </p>
              </article>
              <article className="story-card">
                <h3>Residential estate, Lagos</h3>
                <p className="story-meta">Multi block energy automation</p>
                <p>
                  Introduced zoned control and dynamic load shedding, so
                  residents enjoy longer solar hours and the estate association
                  tracks usage by block in near real time.
                </p>
              </article>
              <article className="story-card">
                <h3>Healthcare facility, North Central</h3>
                <p className="story-meta">Critical power assurance</p>
                <p>
                  Built redundant inverter paths, battery backup and monitoring,
                  keeping theatres and laboratories powered through repeated
                  grid failures.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-use-cases">
          <div className="shell">
            <p className="eyebrow center">Automation in practice</p>
            <h2 className="section-title center">
              Where ArcSolis systems deliver value.
            </h2>

            <div className="use-case-grid">
              <article className="use-case">
                <h3>Solar &amp; storage control</h3>
                <p>
                  Coordinate inverters, batteries and grid feeds to supply the
                  right loads at the right time with minimal human
                  intervention.
                </p>
              </article>
              <article className="use-case">
                <h3>Tariff aware scheduling</h3>
                <p>
                  Turn heavy loads on when tariffs are low, use solar and
                  storage during peaks and log savings for every cycle.
                </p>
              </article>
              <article className="use-case">
                <h3>Generator runtime reduction</h3>
                <p>
                  Use automation logic to start generators only when absolutely
                  required while protecting against deep discharge events.
                </p>
              </article>
              <article className="use-case">
                <h3>Portfolio monitoring</h3>
                <p>
                  View multiple sites from a single dashboard with alerts,
                  performance baselines and anomaly detection.
                </p>
              </article>
              <article className="use-case">
                <h3>Power quality protection</h3>
                <p>
                  Detect sags, surges and harmonics, then reroute sensitive
                  equipment to clean power feeds automatically.
                </p>
              </article>
              <article className="use-case">
                <h3>ESG &amp; reporting support</h3>
                <p>
                  Track emissions reductions and energy mix data that feeds your
                  sustainability reports and investment pitches.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-insights" id="insights">
          <div className="shell">
            <p className="eyebrow center">Insights &amp; resources</p>
            <h2 className="section-title center">
              Guides to modern energy strategy.
            </h2>
            <div className="card-grid insights-grid">
              <article className="insight-card">
                <h3>Designing solar for unreliable grids</h3>
                <p>
                  Key questions to ask before you approve any solar proposal in
                  Nigeria or West Africa.
                </p>
                <a href="#contact" className="insight-link">
                  Request the guide
                </a>
              </article>
              <article className="insight-card">
                <h3>From diesel only to hybrid systems</h3>
                <p>
                  How to plan a phased migration that keeps operations steady
                  while you cut fuel spend.
                </p>
                <a href="#contact" className="insight-link">
                  Talk to an engineer
                </a>
              </article>
              <article className="insight-card">
                <h3>Making energy data board ready</h3>
                <p>
                  Simple dashboards and metrics your leadership team
                  understands instantly.
                </p>
                <a href="#contact" className="insight-link">
                  See reporting templates
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-cta" id="contact">
          <div className="shell cta-shell">
            <div className="cta-copy">
              <p className="eyebrow">Next step</p>
              <h2>Less manual intervention, more predictable power.</h2>
              <p>
                Share a few details about your site and our team will schedule a
                remote assessment within two business days.
              </p>
              <form
                className="cta-form"
                action="https://formspree.io/f/xeqybpna"
                method="POST"
              >
                <div className="form-grid">
                  <label>
                    <span>Full name</span>
                    <input name="name" required />
                  </label>
                  <label>
                    <span>Organisation</span>
                    <input name="organisation" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input name="phone" />
                  </label>
                </div>
                <label className="full-width">
                  <span>Briefly describe your site and energy goals</span>
                  <textarea name="message" rows={4} required />
                </label>
                <button type="submit" className="btn primary">
                  Request audit
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="shell">
            <p className="eyebrow center">Your questions, our answers</p>
            <h2 className="section-title center">ArcSolis FAQ.</h2>
            <div className="faq-list" role="list">
              {faqs.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <article
                    className={`faq-item${isOpen ? " open" : ""}`}
                    role="listitem"
                    key={item.question}
                  >
                    <button
                      className="faq-question"
                      aria-expanded={isOpen ? "true" : "false"}
                      type="button"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-shell">
          <div className="footer-brand-block">
            <img
              src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/9b833648-e63e-4217-a1bf-9ede7107aefa"
              alt="ArcSolis logo"
              className="footer-logo"
            />
            <p>
              ArcSolis Limited designs resilient solar, storage and automation
              systems for organisations that demand dependable power.
            </p>
          </div>
          <div className="footer-columns">
            <div>
              <h3>Contact</h3>
              <p>
                22, Samora Machel Street,
                <br />
                Asokoro, Abuja.
              </p>
              <p>
                <a href="mailto:info@arc-solis.com">info@arc-solis.com</a>
                <br />
                <a href="tel:+2347087862502">+234 708 786 2502</a>
              </p>
            </div>
            <div>
              <h3>Quick links</h3>
              <ul>
                <li>
                  <a href="#solutions">Solutions</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#stories">Customer stories</a>
                </li>
                <li>
                  <a href="#contact">Request audit</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Stay informed</h3>
              <p>
                Sign up to receive occasional insights on solar, storage and
                automation.
              </p>
              <form
                className="footer-form"
                action="https://formspree.io/f/mgegdgqe"
                method="POST"
              >
                <label>
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <button type="submit" className="btn secondary full">
                  Get updates
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="shell footer-bottom-shell">
            <p>&copy; {year} ArcSolis Limited. All rights reserved.</p>
            <p>
              <a
                href="https://www.arc-solis.com"
                target="_blank"
                rel="noreferrer"
              >
                www.arc-solis.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
