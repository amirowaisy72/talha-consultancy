import React, { useEffect } from "react";
import Bars1 from "./Bars/Index";
import AboutCompany from "../../../Home/Second/Index";
import GovtAgencies from "../../../../CommonComponents/GovttAgencies/Index";

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
              <Bars1 />
            </div>
            <div
              data-elementor-type="wp-page"
              data-elementor-id="45463"
              className="elementor elementor-45463"
              data-elementor-post-type="page"
            >
              <AboutCompany />
            </div>
            <center>
              <GovtAgencies
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              ></GovtAgencies>
            </center>
          </div>
          <span className="cp-load-after-post"></span>
        </div>
      </article>
    </>
  );
};

export default Index;
