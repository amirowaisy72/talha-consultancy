import React from "react";
import Counts from "./Counts";

const Right = () => {
  return (
    <>
      <div
        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4e0758d5"
        data-id="4e0758d5"
        data-element_type="column"
      >
        <div className="elementor-widget-wrap elementor-element-populated">
          <div
            className="elementor-element elementor-element-415ba3db elementor-widget elementor-widget-image"
            data-id="415ba3db"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div className="elementor-widget-container">
              <img
                loading="lazy"
                decoding="async"
                width="486"
                height="743"
                src="wp-content/uploads/2023/09/Accounting-Firms-in-Dubai.png"
                className="attachment-full size-full wp-image-52742"
                alt="Accounting Firms in Dubai"
                srcset="
                                    https://www.aaconsultancy.ae/wp-content/uploads/2023/09/Accounting-Firms-in-Dubai.png         486w,
                                    https://www.aaconsultancy.ae/wp-content/uploads/2023/09/Accounting-Firms-in-Dubai-196x300.png 196w
                                  "
                sizes="(max-width: 486px) 100vw, 486px"
              />
            </div>
          </div>
          <section
            className="elementor-section elementor-inner-section elementor-element elementor-element-ca74d77 vertical-counter elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="ca74d77"
            data-element_type="section"
          >
            <Counts />
          </section>
        </div>
      </div>
    </>
  );
};

export default Right;
