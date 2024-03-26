import React from "react";
import Top from "./Top";
import Cards from "./Cards";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-cda824d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="cda824d"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        style={{
          display: "flex",
          justifyContent: "center", // Center the content horizontally
          alignItems: "center", // Center the content vertically
          backgroundColor: "#e1e1e1", // Grey background color
          padding: "40px", // Add padding to create space between content and background
        }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e7afb27"
            data-id="e7afb27"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <Top />
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
