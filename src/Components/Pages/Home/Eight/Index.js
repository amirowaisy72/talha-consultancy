import React from "react";
import Testimonials from "./Testimonials";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-6a3a5b1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="6a3a5b1"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-33e55f4"
            data-id="33e55f4"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-570f2190 elementor-widget elementor-widget-heading"
                data-id="570f2190"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    Client Testimonials
                  </h3>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-31a3c4a6 elementor-widget elementor-widget-heading"
                data-id="31a3c4a6"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    What Our Valued Customers Say About us!
                  </h4>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-484a0e98 video-testimonials elementor-widget elementor-widget-html"
                data-id="484a0e98"
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <div
                    id="sp-testimonial-pro-wrapper-39691"
                    className="sp-testimonial-pro-wrapper sp-testimonial-carousel sp_tpro_nav_position_vertical_center tpro-layout-slider-standard"
                    data-testimonial-id="39691"
                    data-layout="slider"
                  >
                    <span style={{color:"white"}}>load here</span>
                    <div className="sp-testimonial-carousel-wrapper">
                      <div
                        id="sp-testimonial-pro-39691"
                        dir="ltr"
                        data-testimonial='{ "videoIcon": 1, "lightboxIcon": 1, "thumbnailSlider": false}'
                        data-preloader="1"
                        data-arrowicon="angle"
                        data-swiper_slider='{"dots": false,"spaceBetween":10, "adaptiveHeight": false, "rows": 1, "pauseOnHover": true, "effect": false, "slidesToShow": 4, "speed": 600, "arrows": true, "autoplay": true, "autoplaySpeed": 3000, "swipe": true, "swipeToSlide": false, "draggable": true, "rtl": false, "infinite": true, "slidesToScroll": 1, "fade": false,"slidesPerView": {"lg_desktop":4 , "desktop": 4, "laptop":3 , "tablet": 2, "mobile": 1},"slideToScroll": {"lg_desktop":1 , "desktop": 1, "laptop":1 , "tablet":1 , "mobile":1 }, "slidesRow": {"lg_desktop":1 , "desktop": 1, "laptop": 1 , "tablet":1, "mobile": 1},"navigation_mobile": true, "pagination_mobile":false, "autoplay_mobile": true}'
                        className="sp-tpCarousel swiper-container sp-testimonial-pro-section tpro-layout-slider-standard sp-testimonial-pro-read-more tpro-readmore-expand- tpro-style-theme-one"
                      >
                        <Testimonials />
                      </div>
                    </div>
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

export default Index;
