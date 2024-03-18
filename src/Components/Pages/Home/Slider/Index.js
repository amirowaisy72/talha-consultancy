import React from "react";
import MobileScreen from "./Mobile/Index"
import PCScreen from "./Computer/Index"

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-010e1cc elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
        data-id="010e1cc"
        data-element_type="section"
        data-settings='{"stretch_section":"section-stretched"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-818d759"
            data-id="818d759"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-834f6f2 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
                data-id="834f6f2"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                {/* Slider data for desktop screen */}
                <PCScreen />
              </div>
              {/* Slider data for mobile screen */}
              <MobileScreen />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
