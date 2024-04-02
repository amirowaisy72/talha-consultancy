import React from "react";
import Slider from "../Home/Slider/Index";
import Tabs from "../Home/Tabs/Index";
import Experience from "../../../Pages/Home/Second/Index";
import Section2 from "./Section2/Index";
import Section3 from "./Section3/Index";
import GovtAgencies from "../../../CommonComponents/GovttAgencies/Index";
import ContactUsForm from "../../../CommonComponents/ContactUseForm/Index";

const Index = () => {
  return (
    <article
      className="post-45479 page type-page status-publish ast-article-single"
      id="post-45479"
      itemType="https://schema.org/CreativeWork"
      itemScope="itemscope"
    >
      {" "}
      <div className="entry-content clear" itemProp="text">
        {" "}
        <div
          data-elementor-type="wp-page"
          data-elementor-id={45479}
          className="elementor elementor-45479"
          data-elementor-post-type="page"
        >
          <Slider />
          <Tabs />

          <Experience />

          <Section2 />

          <Section3 />

          <GovtAgencies />

          <ContactUsForm />
        </div>{" "}
      </div>{" "}
    </article>
  );
};

export default Index;
