import React from "react";
import Left from "./Left";
import Form from "./Form";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9e738e4 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="9e738e4"
        data-element_type="section"
        id="free-cunsultation"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <Left />
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0ec611a"
            data-id="0ec611a"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-430b143 lp-contact-form elementor-button-align-start elementor-widget elementor-widget-form"
                data-id="430b143"
                data-element_type="widget"
                data-settings='{"step_type":"text"}'
                data-widget_type="form.default"
              >
                <div className="elementor-widget-container">
                  <Form />
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
