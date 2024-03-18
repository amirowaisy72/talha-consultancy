import React from "react";
import SliderSection from "./Slider/Index";
import Second from "./Second/Index";
import Third from "./Third/Index";
import Four from "./Four/Index";
import Five from "./Five/Index";
import Six from "./Six/Index";
import Seven from "./Seven/Index";
import Eight from "./Eight/Index";
import Nine from "./Nine/Index";
import Ten from "./Ten/Index";
import Eleven from "./Eleven/Index";
import Twelve from "./Twelve/Index";

const Index = () => {
  return (
    <>
      <article
        className="post-45463 page type-page status-publish ast-article-single"
        id="post-45463"
        itemtype="https://schema.org/CreativeWork"
        itemscope="itemscope"
      >
        <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>
        <div className="entry-content clear" itemprop="text">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="45463"
            className="elementor elementor-45463"
            data-elementor-post-type="page"
          >
            <SliderSection />
            <Second />
            <Third />
            <Four />
            <Five />
            <Six />
            <Seven />
            <Eight />
            <Nine />
            <Ten />
            <Eleven />
            <Twelve />
          </div>
        </div>
      </article>
    </>
  );
};

export default Index;
