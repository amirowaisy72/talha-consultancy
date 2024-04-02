import React from "react";
import Slider from "../Home/Slider/Index";
import Tabs from "../Home/Tabs/Index";
import MainContent from "./MainContent/Index";
import ContactUsForm from "../../../CommonComponents/ContactUseForm/Index";

const Index = () => {
  return (
    <div>
      <Slider />
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
            <Tabs />
          </div>
        </div>
      </article>
      <MainContent />
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
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
