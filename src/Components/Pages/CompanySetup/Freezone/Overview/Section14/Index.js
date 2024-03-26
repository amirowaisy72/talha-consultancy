import React from "react";
import "./style.css"
import Rows from "./Rows";
import Top from "./Top";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-35bbcf2f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="35bbcf2f"
        data-element_type="section"
        style={{padding:"20px"}}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6583e84c"
            data-id="6583e84c"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <Top />
              <Rows />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
