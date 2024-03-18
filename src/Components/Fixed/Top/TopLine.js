import React from "react";
import Logo from "./Logo";

const TopLine = () => {
  return (
    <>
      <div className="ast-main-header-wrap main-header-bar-wrap">
        <div
          className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
          data-section="section-primary-header-builder"
        >
          <div
            className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
            data-section="section-primary-header-builder"
          >
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
              <Logo />
              <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                <div
                  className="ast-builder-menu-2 ast-builder-menu ast-flex ast-builder-menu-2-focus-item ast-builder-layout-element site-header-focus-item"
                  data-section="section-hb-menu-2"
                >
                  <div className="ast-main-header-bar-alignment">
                    <div className="main-header-bar-navigation">
                      <nav
                        className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                        id="secondary_menu-site-navigation-desktop"
                        aria-label="Site Navigation"
                        itemtype="https://schema.org/SiteNavigationElement"
                        itemscope="itemscope"
                      >
                        <div className="main-navigation ast-inline-flex">
                          <ul
                            id="ast-hf-menu-2"
                            className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border astra-menu-animation-fade inline-on-mobile"
                          >
                            <li
                              id="menu-item-369"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-369"
                            >
                              <a href="tel:+97142690673" className="menu-link">
                                <div className="phone">
                                  <img
                                    src="dubai/wp-content/uploads/2021/03/header-phone.png"
                                    alt
                                  />
                                  <span>Call Now</span>
                                  <br />
                                  +92 345 2167252
                                </div>
                              </a>
                            </li>
                            <li
                              id="menu-item-50645"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-50645"
                            >
                              <a href="tel:800528624" className="menu-link">
                                <div className="tollfree">
                                  <img
                                    src="wp-content/uploads/2023/06/toll-free.png"
                                    alt
                                  />
                                  <span className="code">800</span>
                                  <div className="right">
                                    <span className="launch">LAUNCH</span>
                                    <span className="number">528 624</span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li
                              id="menu-item-370"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-370"
                            >
                              <a
                                href="https://api.whatsapp.com/send?phone=+923452167252&amp;text=Hello..."
                                className="menu-link"
                              >
                                <div className="whatsapp">
                                  <img
                                    src="dubai/wp-content/uploads/2021/03/header-whatsapp.png"
                                    alt
                                  />
                                  <span>WhatsApp</span>
                                  <br />
                                  +92 345 2167252
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopLine;
