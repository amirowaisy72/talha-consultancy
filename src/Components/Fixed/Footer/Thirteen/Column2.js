import React from "react";
import { Link } from "react-router-dom";

const Column2 = () => {
  return (
    <>
      <div
        className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-98b0013"
        data-id="98b0013"
        data-element_type="column"
      >
        <div className="elementor-widget-wrap elementor-element-populated">
          <div
            className="elementor-element elementor-element-4042749 elementor-widget elementor-widget-heading"
            data-id="4042749"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h4 className="elementor-heading-title elementor-size-default">
                Browse
              </h4>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-dd8c80d uael-nav-menu__breakpoint-none uael-nav-menu__align-left uael-submenu-icon-arrow uael-link-redirect-child elementor-widget elementor-widget-uael-nav-menu"
            data-id="dd8c80d"
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
                        to="accounting/accounting-services"
                        className="uael-menu-item"
                      >
                        Accounting Service
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
                        to="accounting/bookkeeping-services"
                        className="uael-menu-item"
                      >
                        Bookkeeping Service
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
                      <Link
                        to="auditing"
                        className="uael-menu-item"
                      >
                        External and Internal Audit
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </Link>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-09c1670"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <Link
                        to="/auditing"
                        className="uael-menu-item"
                      >
                        Internal Audit
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </Link>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-6ace099"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <Link
                        to="/auditing"
                        className="uael-menu-item"
                      >
                        External Audit
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </Link>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-85b49a8"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <a
                        href="#"
                        className="uael-menu-item"
                      >
                        Company Incorporation
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </a>
                    </li>

                    <li
                      className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-e8b9f13"
                      data-dropdown-width="default"
                      data-dropdown-pos="left"
                    >
                      <Link to="/advisory-&-consultation" className="uael-menu-item">
                        VAT Fines
                        <span className="uael-menu-toggle sub-arrow parent-item">
                          <i className="fa"></i>
                        </span>
                      </Link>
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

export default Column2;
