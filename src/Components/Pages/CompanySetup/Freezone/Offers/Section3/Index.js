import React from "react";
import Tabs from "./Tabs";
import Offers from "./Offers";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-b36f004 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="b36f004"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-69fd9bb"
            data-id="69fd9bb"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-8d3826a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="8d3826a"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ed41c7b"
                    data-id="ed41c7b"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-4117dcc uael-equal__height-yes uael-posts-thumbnail-ratio offer-gallery elementor-widget elementor-widget-uael-posts"
                        data-id="4117dcc"
                        data-element_type="widget"
                        data-settings='{"classic_show_filters":"yes","classic_slides_to_show":3,"classic_slides_to_show_tablet":2,"classic_slides_to_show_mobile":1}'
                        data-widget_type="uael-posts.classic"
                      >
                        <div className="elementor-widget-container">
                          <div className="uael-post__header">
                            <Tabs />
                          </div>
                          <Offers />
                          <div className="uael-post__footer"></div>
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
