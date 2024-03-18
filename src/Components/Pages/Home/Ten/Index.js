import React from "react";
import NewsCards from "./NewsCards";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-e5c5c1a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="e5c5c1a"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6f0ee0ec"
            data-id="6f0ee0ec"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-4ddcfa53 elementor-widget elementor-widget-heading"
                data-id="4ddcfa53"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    News & Blogs
                  </h3>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-474235d elementor-widget elementor-widget-heading"
                data-id="474235d"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    Learn what is new in the world of audit and accounting
                  </h4>
                </div>
              </div>
              <NewsCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
