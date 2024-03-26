import React from "react";
import Faqs from "./Faqs";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-c845040 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="c845040"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-124622f"
            data-id="124622f"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-3c5d331 elementor-widget elementor-widget-heading"
                data-id="3c5d331"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                  Freezone license FAQ
                  </h2>
                </div>
              </div>
              <Faqs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
