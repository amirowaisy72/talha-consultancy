import React from "react";
import { Link } from "react-router-dom";

const Column1 = () => {
  return (
    <>
      <div
        className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-73f4b2c"
        data-id="73f4b2c"
        data-element_type="column"
      >
        <div className="elementor-widget-wrap elementor-element-populated">
          <div
            className="elementor-element elementor-element-0313187 elementor-widget elementor-widget-heading"
            data-id="0313187"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h4 className="elementor-heading-title elementor-size-default">
                Business Setup
              </h4>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-5a8cff3 uael-nav-menu__breakpoint-none uael-submenu-icon-arrow uael-link-redirect-child elementor-widget elementor-widget-uael-nav-menu"
            data-id="5a8cff3"
            data-element_type="widget"
            data-widget_type="uael-nav-menu.default"
          >
            <div className="elementor-widget-container">
              <div
                className="uael-nav-menu uael-layout-vertical uael-nav-menu-layout"
                data-layout="vertical"
              >
                <div
                  role="button"
                  className="uael-nav-menu__toggle elementor-clickable"
                >
                  <span className="screen-reader-text">Main Menu</span>
                  <div className="uael-nav-menu-icon"></div>
                </div>
                <nav
                  className="uael-nav-menu__layout-vertical uael-nav-menu__submenu-arrow"
                  data-toggle-icon
                  data-close-icon
                  data-full-width
                >
                  <ul className="uael-nav-menu uael-nav-menu-custom uael-custom-wrapper">
                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-ded38fe"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <Link
                        to="freezone/overview"
                        className="uael-menu-item"
                      >
                        Free zone Business
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </Link>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-626396b"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <Link
                        to="mainland/overview"
                        className="uael-menu-item"
                      >
                        Mainland Company
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </Link>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-791dbf2"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <a
                        href="#"
                        className="uael-menu-item"
                      >
                        Company Liquidation
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </a>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-09c1670"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <a
                        href="#"
                        className="uael-menu-item"
                      >
                        Business License
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </a>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-6ace099"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <a
                        href="#"
                        className="uael-menu-item"
                      >
                        Rental Office
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column1;
