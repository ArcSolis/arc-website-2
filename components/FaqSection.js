import { useState } from "react";
import { MotionGroup, MotionItem, MotionSection } from "./ui/motion";

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
    <MotionSection className="section-faq" id="faq" direction="left">
      <div className="shell">
        <MotionGroup className="section-header" staggerChildren={0.1}>
          <MotionItem as="p" className="eyebrow" direction="left" distance={24}>
            Technical Support
          </MotionItem>
          <MotionItem as="h2" className="section-title" direction="left" distance={38}>
            Frequently asked questions.
          </MotionItem>
        </MotionGroup>

        <MotionGroup className="faq-grid" staggerChildren={0.12} delayChildren={0.12}>
          <MotionGroup className="faq-list" role="list" staggerChildren={0.08}>
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <MotionItem
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  role="listitem"
                  key={item.question}
                  as="article"
                  direction={index % 2 === 0 ? "left" : "right"}
                  distance={20}
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
                </MotionItem>
              );
            })}
          </MotionGroup>

          <MotionItem className="faq-cta-sidebar" direction="right" distance={34}>
            <div className="cta-card">
              <h3>Still have questions?</h3>
              <p>Our team is available for deep-dive technical discussions.</p>
              <a href="mailto:hello@arcsolis.com" className="btn btn-secondary btn-sm">
                Contact Engineering
              </a>
            </div>
          </MotionItem>
        </MotionGroup>
      </div>
    </MotionSection>
  );
}

export default FaqSection;
