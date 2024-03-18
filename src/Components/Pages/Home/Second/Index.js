import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import RightSide from "./RightSide";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-52657a5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="52657a5"
        data-element_type="section"
      >
        <Heading />
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-c93605f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="c93605f"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <Content />
          <RightSide />
        </div>
      </section>
    </>
  );
};

export default Index;
