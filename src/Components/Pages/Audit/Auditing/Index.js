import React from "react";
import Slider from "./Slider";
import Section1 from "./Section1/Index";
import ContactusForm from "../../../CommonComponents/ContactUseForm/Form";

const Index = () => {
  return (
    <>
      <article
        className="post-2402 page type-page status-publish ast-article-single"
        id="post-2402"
        itemType="https://schema.org/CreativeWork"
        itemScope="itemscope"
      >
        {" "}
        <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
          {" "}
        </header>{" "}
        <div className="entry-content clear" itemProp="text">
          {" "}
          <div
            data-elementor-type="wp-page"
            data-elementor-id={2402}
            className="elementor elementor-2402"
            data-elementor-post-type="page"
          >
            <Slider />
            <Section1 />
            <center>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                  padding: "50px",
                  borderRadius: "5px",
                  maxWidth: "900px",
                  width: "100%",
                  marginBottom: "30px",
                }}
              >
                <ContactusForm />
              </div>
            </center>
          </div>{" "}
        </div>{" "}
      </article>
    </>
  );
};

export default Index;
