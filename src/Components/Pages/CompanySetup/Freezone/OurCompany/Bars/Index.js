import React from "react";
import AllBars from "./AllBars";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-635095e0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="635095e0"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7271bbf2"
            data-id="7271bbf2"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-490b0d6c uael-nav-menu__align-center uael-nav-menu__breakpoint-none uael-submenu-open-hover uael-submenu-icon-arrow uael-submenu-animation-none uael-link-redirect-child elementor-widget elementor-widget-uael-nav-menu"
                data-id="490b0d6c"
                data-element_type="widget"
                data-settings='{"distance_from_menu":{"unit":"px","size":"","sizes":[]},"distance_from_menu_tablet":{"unit":"px","size":"","sizes":[]},"distance_from_menu_mobile":{"unit":"px","size":"","sizes":[]}}'
                data-widget_type="uael-nav-menu.default"
              >
                <AllBars />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
