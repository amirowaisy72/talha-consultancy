import React from "react";
import Top from "./Top";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-f34530d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="f34530d"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f48e70c"
            data-id="f48e70c"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <Top />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
