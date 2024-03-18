import React from "react";
import Left from "./Left";
import Right from "./Right";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-cefb726 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="cefb726"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72683095"
            data-id="72683095"
            data-element_type="column"
          >
            <Left />
          </div>
         <Right />
        </div>
      </section>
    </>
  );
};

export default Index;
