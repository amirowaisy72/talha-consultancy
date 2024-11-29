import React from "react";
import Cards from "./Cards";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-dac40a8 what-we-do elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="dac40a8"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-58f1cb4d"
            data-id="58f1cb4d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-79419bd6 elementor-widget elementor-widget-heading"
                data-id="79419bd6"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    What We Do (2/2 equal)
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-207abef4 elementor-widget elementor-widget-heading"
                data-id="207abef4"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    Let us take care of your accounting, audit and financial
                    management needs with our comprehensive VAT-compliant
                    services!
                  </h4>
                </div>
              </div>
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
