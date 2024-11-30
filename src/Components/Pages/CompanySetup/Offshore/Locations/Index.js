import React, { useEffect } from "react";
import "./output.css";
import Bars3 from "../../../../CommonComponents/Bars3/Index";
import Section2 from "./Section2/Index";
import Section3 from "./Section3/Index";
import ContactusForm from "../../../../CommonComponents/ContactUseForm/Index";
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
            <Bars3 />
            <Section2 />
            <Section3 />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
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
