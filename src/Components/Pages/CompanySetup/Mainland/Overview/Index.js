import React, { useEffect } from "react";
import "./output.css";
import Bars2 from "../../../../CommonComponents/Bars2/Index";
import Section2 from "./Section2/Index";
import Section3 from "./Section3/Index";
import ContactusForm from "../../../../CommonComponents/ContactUseForm/Index";

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
            <div style={{ marginBottom: "30px" }}>
              <Bars2 />
            </div>
            <div style={{ marginBottom: "30px" }}>
              <Section2 />
            </div>
            <div style={{ marginBottom: "30px" }}>
              <center>
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
              </center>
            </div>
            <Section3 />
            {/* <Section4 /> */}
            {/* <Section5 /> */}
          </div>
          <span className="cp-load-after-post"></span>
        </div>
      </article>
    </>
  );
};

export default Index;
