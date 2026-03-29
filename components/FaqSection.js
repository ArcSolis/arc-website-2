import { useState } from "react";

const faqs = [
  {
    question: "What does ArcSolis focus on?",
    answer:
      "ArcSolis works across software development, product design, engineering design and general contracting.",
  },
  {
    question: "Who is a good fit for your team?",
    answer:
      "We work with founders, operations leaders and project sponsors who need one partner from idea through build and handover.",
  },
  {
    question: "Do you only run full builds?",
    answer:
      "No. We support audits, roadmaps, design sprints and technical reviews as focused engagements.",
  },
  {
    question: "How do projects normally start?",
    answer:
      "Most projects begin with a short discovery where we review goals, constraints and existing assets then agree the first phase.",
  },
  {
    question: "Where do you work?",
    answer:
      "Our core team sits in Nigeria and supports work across West Africa and select remote clients.",
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
