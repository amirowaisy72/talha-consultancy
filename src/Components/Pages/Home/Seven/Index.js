import React from "react";
import Top from "./Top";
import Cards from "./Cards";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-01ef16f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="01ef16f"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2d4583d"
            data-id="2d4583d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <Top />
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
