import React from "react";
import Header from "../Common/Header";
import Blogs from "./Section1/Index";
import ContactUsForm from "../../../CommonComponents/ContactUseForm/Index";

const Index = () => {
  return (
    <article
      className="post-35771 page type-page status-publish ast-article-single"
      id="post-35771"
      itemType="https://schema.org/CreativeWork"
      itemScope="itemscope"
    >
      <div className="entry-content clear" itemProp="text">
        <div
          data-elementor-type="wp-page"
          data-elementor-id={35771}
          className="elementor elementor-35771"
          data-elementor-post-type="page"
        >
          <Header />
          <Blogs />
          <div style={{ marginBottom: "30px" }}>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Index;
