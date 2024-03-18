import React from "react";
import Picture from "./Picture";
import RightSide from "./RightSide";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-4663a17 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="4663a17"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-846c380"
            data-id="846c380"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-b5a0b38 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="b5a0b38"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <Picture />
                  <RightSide />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
