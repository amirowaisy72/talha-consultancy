import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-716c8414 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="716c8414"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-13b72833"
            data-id="13b72833"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <Top />
              <Bottom />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
