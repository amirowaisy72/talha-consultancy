import React from "react";
import Address from "./Address";
import Phone from "./Phone";
import Contacts from "./Contacts";
import WorkingHours from "./WorkingHours";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9ed99c1 footer-contact elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="9ed99c1"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba88832"
            data-id="ba88832"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-fe23ca9 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="fe23ca9"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <Address />
                  <Phone />
                  <Contacts />
                  <WorkingHours />
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
