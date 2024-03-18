import React from "react";
import Options from "./Options";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-dd71bd3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="dd71bd3"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4c9d316c"
            data-id="4c9d316c"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-728a9533 elementor-widget elementor-widget-heading"
                data-id="728a9533"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    We work closely
                    <br />
                    with all Government Agencies
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-30b6fdb elementor-widget elementor-widget-heading"
                data-id="30b6fdb"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    We're always on the same page with Government Agencies,
                    working together to get the job done!
                  </h4>
                </div>
              </div>
              <Options />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
