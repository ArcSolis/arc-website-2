import { useState } from "react";

const faqs = [
  {
    question: "What kind of work does ArcSolis support?",
    answer:
      "We focus on technical consulting for energy and infrastructure projects, spanning feasibility studies, FEED, detailed design oversight, and execution strategy.",
  },
  {
    question: "Who do you usually work with?",
    answer:
      "Our clients are typically project sponsors, lead engineers, and private equity investors who require objective technical verification and risk management.",
  },
  {
    question: "Do you replace existing engineering teams?",
    answer:
      "No. We function as a high-leverage technical layer that works alongside existing teams and contractors to ensure architectural integrity and project delivery.",
  },
  {
    question: "How do projects start?",
    answer:
      "Engagements generally begin with a technical audit or a discovery session to define clear success metrics and immediate risk areas.",
  },
  {
    question: "Where do you operate?",
    answer:
      "While Nigerian-based, our methodology is global. We support projects across Sub-Saharan Africa and provide remote technical oversight for international energy assets.",
  },
];

function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="section-faq" id="faq">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Technical Support</p>
          <h2 className="section-title">Frequently asked questions.</h2>
        </div>
        
        <div className="faq-grid">
          <div className="faq-list" role="list">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <article
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  role="listitem"
                  key={item.question}
                >
                  <button
                    className="faq-trigger"
                    aria-expanded={isOpen ? "true" : "false"}
                    type="button"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-status-icon">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-content">
                    <div className="faq-inner-text">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          
          <div className="faq-cta-sidebar">
            <div className="cta-card">
              <h3>Still have questions?</h3>
              <p>Our team is available for deep-dive technical discussions.</p>
              <a href="mailto:hello@arcsolis.com" className="btn btn-secondary btn-sm">
                Contact Engineering
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
