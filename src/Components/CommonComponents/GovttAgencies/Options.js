import React from "react";
import ImageSlider from "./ImageSlider";

const Options = () => {
  return (
    <>
      <section
        className="elementor-section elementor-inner-section elementor-element elementor-element-60e244ea elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="60e244ea"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4c6c6ba1"
            data-id="4c6c6ba1"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-324d0929 elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel"
                data-id="324d0929"
                data-element_type="widget"
                data-settings='{"slides_to_show":"6","slides_to_scroll":"1","navigation":"dots","slides_to_show_tablet":"3","slides_to_show_mobile":"1","slides_to_scroll_tablet":"1","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500,"image_spacing_custom":{"unit":"px","size":20,"sizes":[]},"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]}}'
                data-widget_type="image-carousel.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="elementor-image-carousel-wrapper swiper-container"
                    dir="ltr"
                  >
                    <ImageSlider />
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Options;
