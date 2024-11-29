import React from "react";
import Line1 from "./Line1";
import Line2 from "./Line2";
import Line3 from "./Line3";
import Line4 from "./Line4";
import Line5 from "./Line5";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-343987d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="343987d"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0171c3e"
            data-id="0171c3e"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-24bdf8c uael-dual-heading-align-center elementor-widget elementor-widget-uael-dual-color-heading"
                data-id="24bdf8c"
                data-element_type="widget"
                data-widget_type="uael-dual-color-heading.default"
              >
                <div className="elementor-widget-container">
                  <div className="uael-module-content uael-dual-color-heading uael-heading-stack-none">
                    <h3>
                      <span className="uael-before-heading">
                        <span
                          className="elementor-inline-editing uael-dual-heading-text uael-first-text"
                          data-elementor-setting-key="before_heading_text"
                          data-elementor-inline-editing-toolbar="basic"
                        >
                          OUR
                        </span>
                      </span>
                      <span className="uael-adv-heading-stack">
                        <span
                          className="elementor-inline-editing uael-dual-heading-text uael-highlight-text"
                          data-elementor-setting-key="second_heading_text"
                          data-elementor-inline-editing-toolbar="basic"
                        >
                          BRANCHES
                        </span>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <Line1 />
              {/* <Line2 />
              <Line3 />
              <Line4 /> */}
              {/* <Line5 /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
