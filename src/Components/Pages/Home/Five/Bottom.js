import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-1d9a174 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="1d9a174"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-70f4662"
            data-id="70f4662"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-2b75af6 elementor-widget elementor-widget-text-editor"
                data-id="2b75af6"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    At A&amp;A Associate LLC, we take pride in our role as
                    <Link
                      to="accounting/accounting-services"
                      rel="noopener"
                    >
                      accounting and auditing professionals in Dubai, UAE
                    </Link>
                    . We, being the best of auditing companies in UAE strive to
                    uphold the highest standards of professionalism, integrity,
                    and ethics in our work, supporting the growth and success of
                    businesses in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bottom;
