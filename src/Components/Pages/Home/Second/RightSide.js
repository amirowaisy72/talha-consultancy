import React from "react";
import Experience from "./Experience";
import Teams from "./Teams";

const RightSide = () => {
  return (
    <>
      <div
        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-631dfab8"
        data-id="631dfab8"
        data-element_type="column"
      >
        <div className="elementor-widget-wrap elementor-element-populated">
          <Experience />
          <Teams />
        </div>
      </div>
    </>
  );
};

export default RightSide;
