import React, { useState } from "react";

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const faqs = [
    {
      question:
        "What should I look for when selecting audit firms in Dubai?",
      answer:
        "Faq1 answer.",
    },
    {
      question:
        "Why do you need to outsource accounting?",
      answer:
        "Faq2 answer.",
    },
  ];

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <div
        className="elementor-element elementor-element-62ff30b faq elementor-widget elementor-widget-accordion"
        data-id="62ff30b"
        data-element_type="widget"
        data-widget_type="accordion.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-accordion">
            {/* start here */}
            <div>
              {faqs.map((faq, index) => (
                <div className="elementor-accordion-item" key={index}>
                  <h4
                    className="elementor-tab-title"
                    role="button"
                    aria-expanded={expandedIndex === index}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span
                      className="elementor-accordion-icon elementor-accordion-icon-right"
                      aria-hidden="true"
                    >
                      {expandedIndex === index ? "-" : "+"}
                    </span>
                    <a className="elementor-accordion-title" tabIndex="0">
                      {faq.question}
                    </a>
                  </h4>
                  {expandedIndex === index && <div>{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
