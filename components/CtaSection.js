import { Button } from "./ui/button";

function CtaSection() {
  return (
    <section className="section section-cta" id="contact">
      <div className="shell cta-shell">
        <div className="cta-copy">
          <p className="eyebrow">Next step</p>
          <h2>Discuss an oil and gas project with our team.</h2>
          <p>
            Share a short outline of your project and we follow up within two
            business days with a suggested path.
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
              <span>Describe your project</span>
              <textarea name="message" rows={4} required />
            </label>
            <Button variant="primary" className="cta-button">
              Request a consulting session
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
