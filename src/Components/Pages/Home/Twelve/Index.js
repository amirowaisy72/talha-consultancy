import React from "react";
import Faqs from "./Faqs";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-643aee4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="643aee4"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-45ee3dfa"
            data-id="45ee3dfa"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-5b45712 elementor-widget elementor-widget-heading"
                data-id="5b45712"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    FAQ
                  </h3>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-3ae9c379 faq elementor-widget elementor-widget-accordion"
                data-id="3ae9c379"
                data-element_type="widget"
                data-widget_type="accordion.default"
              >
                <div className="elementor-widget-container">
                  <Faqs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
