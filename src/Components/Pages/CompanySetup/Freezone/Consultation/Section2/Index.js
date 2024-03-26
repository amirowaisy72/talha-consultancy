import React from "react";
import Top from "./Top";
import Faqs from "./Faqs";

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
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-e9a4036 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="e9a4036"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1ea6c34"
                    data-id="1ea6c34"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-8489887 custom-faqs elementor-widget elementor-widget-accordion"
                        data-id="8489887"
                        data-element_type="widget"
                        data-widget_type="accordion.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-accordion">
                            <Faqs />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
