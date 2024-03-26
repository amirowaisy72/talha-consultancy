import React, { useState } from "react";

const Bottom = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      title: "Winning formula",
      description:
        "The UAE was the first country in the Middle East to establish the concept of the free zone in 1985, with the launch of Jebel Ali Free Zone Authority (JAFZA). Although it was a small operation catering only to a handful of companies, it became the first free zone in the world to be awarded ISO certification within 10 years.",
    },
    {
      title: "This is faq 2 title",
      description: "This is faq 2 description",
    },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div
        className="elementor-element elementor-element-34214d85 faq elementor-widget elementor-widget-accordion"
        data-id="34214d85"
        data-element_type="widget"
        data-widget_type="accordion.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-accordion">
            <div>
              {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  <div
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                  >
                    {faq.title}
                  </div>
                  {activeIndex === index && (
                    <div style={{ marginTop: "0.5rem" }}>
                      <p>{faq.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
