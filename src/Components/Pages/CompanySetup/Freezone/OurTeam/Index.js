import React, { useEffect } from "react";
import Section1 from "../OurCompany/Section1/Index";
import Bars1 from "./Bars/Index";
import Section2 from "./Section2/Index"
import Section3 from "./Section3/Index"
import Section4 from "./Section4/Index"

const Index = () => {
  useEffect(() => {
    const element = document.getElementById("overviewPage");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  }, []);
  return (
    <>
      <article
        className="overviewPage post-30512 page type-page status-publish ast-article-single remove-featured-img-padding"
        id="overviewPage"
        itemScope="itemscope"
        itemType="https://schema.org/CreativeWork"
      >
        <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>
        <div className="entry-content clear" itemprop="text">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="30512"
            className="elementor elementor-30512"
          >
            <Section1 />
            <div style={{ marginBottom: "30px" }}>
              <Bars1 />
            </div>
            <Section2 />
            <Section3 />
            <Section4 />
          </div>
          <span className="cp-load-after-post"></span>
        </div>
      </article>
    </>
  );
};

export default Index;
