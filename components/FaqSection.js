import { useState } from "react";

const faqs = [
  {
    question: "What kind of work does ArcSolis support?",
    answer:
      "We focus on consulting for oil and gas projects across studies, FEED, detailed design and execution support.",
  },
  {
    question: "Who do you usually work with?",
    answer:
      "We partner with project sponsors, engineering managers and investors who need an independent technical view.",
  },
  {
    question: "Do you replace existing engineering teams?",
    answer:
      "No. We work alongside your internal staff and external contractors to bring extra focus and perspective.",
  },
  {
    question: "How do projects start?",
    answer:
      "Most engagements start with a short discovery call and a light touch review of current documents.",
  },
  {
    question: "Where do you operate?",
    answer:
      "ArcSolis is based in Nigeria and supports work across West Africa and selected international clients.",
  },
];

function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  return (
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
  );
}

export default FaqSection;
