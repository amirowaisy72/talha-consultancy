import React from "react";
import Slider from "../CommonComponents/AccountingHeader/Index"
import Section1 from "./Section1/Index";
import Section2 from "./Section2/Index";
import Section3 from "./Section3/Index";
import Section4 from "./Section4/Index";
import Section5 from "./Section5/Index";
import Section6 from "./Section6/Index";
import Section7 from "./Section7/Index";
import Section8 from "./Section8/Index";
import Section9 from "./Section9/Index";

const Index = () => {
  return (
    <>
      <article
        className="post-30415 page type-page status-publish ast-article-single remove-featured-img-padding"
        id="post-30415"
        itemType="https://schema.org/CreativeWork"
        itemScope="itemscope"
      >
        <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>
        <div className="entry-content clear" itemProp="text">
          <div
            data-elementor-type="wp-page"
            data-elementor-id={30415}
            className="elementor elementor-30415"
          >
            <Slider />
            <Section1 />
            {/* Faqs here */}
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            {/* Add WhyChoose Us section from Home component */}
            <Section8 />
            {/* Contact Form */}

            {/* Agencies */}
            <Section9 />
          </div>
        </div>
      </article>
    </>
  );
};

export default Index;
