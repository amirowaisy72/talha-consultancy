import React from "react";
import { Link } from "react-router-dom";

const Column4 = () => {
  return (
    <>
      <div
        className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-accc9fc"
        data-id="accc9fc"
        data-element_type="column"
      >
        <div className="elementor-widget-wrap elementor-element-populated">
          <div
            className="elementor-element elementor-element-aa25364 elementor-widget elementor-widget-heading"
            data-id="aa25364"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h4 className="elementor-heading-title elementor-size-default">
                Links
              </h4>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-0cfba03 uael-nav-menu__breakpoint-none uael-nav-menu__align-left uael-submenu-icon-arrow uael-link-redirect-child elementor-widget elementor-widget-uael-nav-menu"
            data-id="0cfba03"
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
                        to="about-us/home/happy-customers"
                        className="uael-menu-item"
                      >
                        Happy Customers
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
                      <a href="#" className="uael-menu-item">
                        Clients
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </a>
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
                        Privacy Policy
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </a>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-d8d0aa3"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <a
                        href="#"
                        className="uael-menu-item"
                      >
                        Refund Policy
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </a>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-2b18a1d"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <a
                        href="#"
                        className="uael-menu-item"
                      >
                        Terms & Conditions
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
                        target="_blank"
                        className="uael-menu-item"
                      >
                        Digital Partner
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

export default Column4;
