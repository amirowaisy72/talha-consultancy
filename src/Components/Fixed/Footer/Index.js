import React from "react";
import Thirteen from "./Thirteen/Index";
import Fourteen from "./Fourteen/Index";
import Fifteen from "./Fifteen/Index";
import Sixteen from "./Sixteen/Index";

const Index = () => {
  return (
    <>
      <footer
        itemtype="https://schema.org/WPFooter"
        itemscope="itemscope"
        id="colophon"
        role="contentinfo"
      >
        <div className="footer-width-fixer">
          <div
            data-elementor-type="wp-post"
            data-elementor-id="44759"
            className="elementor elementor-44759"
            data-elementor-post-type="elementor-hf"
          >
            <Thirteen />
            <Fourteen />
            <Fifteen />
            <Sixteen />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
