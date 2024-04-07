import React from "react";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";
import Column4 from "./Column4";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-8e4552a footer-links elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="8e4552a"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f9d321b"
            data-id="f9d321b"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-302fa53 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="302fa53"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-1cac3b7"
                    data-id="1cac3b7"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-4590fb5 elementor-widget elementor-widget-heading"
                        data-id="4590fb5"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            START YOUR BUSINESS IN DUBAI
                          </h2>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-541de40 elementor-align-justify elementor-tablet-align-center elementor-widget elementor-widget-button"
                        data-id="541de40"
                        data-element_type="widget"
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a
                              className="elementor-button elementor-button-link elementor-size-md"
                              href="#"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">
                                  VAT Expert Consultation
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-cd83fea elementor-widget elementor-widget-image"
                        data-id="cd83fea"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <img
                            loading="lazy"
                            width="363"
                            height="135"
                            src="wp-content/uploads/2022/06/logos.png"
                            className="attachment-large size-large wp-image-52265"
                            alt
                            srcset="
                                    https://www.aaconsultancy.ae/wp-content/uploads/2022/06/logos.png         363w,
                                    https://www.aaconsultancy.ae/wp-content/uploads/2022/06/logos-300x112.png 300w
                                  "
                            sizes="(max-width: 363px) 100vw, 363px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Column1 />
                  <Column2 />
                  <Column3 />
                  <Column4 />
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
