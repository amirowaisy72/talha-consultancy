import React, { useEffect } from "react";
import "./output.css";
import Bars1 from "../../../../CommonComponents/Bars1/Index";
import Section3 from "./Section3/Index";
import Section4 from "./Section4/Index";
import Section5 from "./Section5/Index";
import Section6 from "./Section6/Index";
import Section7 from "./Section7/Index";
import Section8 from "./Section8/Index";
import Section9 from "./Section9/Index";
import Section10 from "./Section10/Index";
import Section13 from "./Section13/Index";
import ContactusForm from "../../../../CommonComponents/ContactUseForm/Index";
import Section16 from "./Section16/Index";

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
            <Bars1 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            {/* <Section11 /> */}
            {/* <Section12 /> */}
            <Section13 />
            {/* <Section14 /> */}
            <div style={{ marginBottom: "30px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #ccc",
                    padding: "50px",
                    borderRadius: "5px",
                    maxWidth: "900px",
                    width: "100%",
                  }}
                >
                  <ContactusForm />
                </div>
              </div>
            </div>
            <Section16 />
          </div>
          <span className="cp-load-after-post"></span>
        </div>
      </article>
    </>
  );
};

export default Index;
