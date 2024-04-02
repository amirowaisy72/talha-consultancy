import React from "react";
import Section1 from "./Section1/Index"
import Section2 from "./Section2/Index"

const Index = () => {
  return (
    <main id="main" className="site-main">
      <article
        className="post-14721 page type-page status-publish ast-article-single remove-featured-img-padding"
        id="post-14721"
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
            data-elementor-id={14721}
            className="elementor elementor-14721"
          >
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-85079a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="85079a2"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              {" "}
              <div className="elementor-background-overlay" />{" "}
              <div className="elementor-container elementor-column-gap-default">
                {" "}
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f422a27"
                  data-id="f422a27"
                  data-element_type="column"
                >
                  {" "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <Section1 />

                    <Section2 />
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>
          </div>{" "}
          <span className="cp-load-after-post" />{" "}
        </div>{" "}
      </article>
    </main>
  );
};

export default Index;
