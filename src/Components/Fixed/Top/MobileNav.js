import React from "react";

const MobileNav = ({ setIsDrawerOpen }) => {
  const mobileNavOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div
        id="ast-mobile-header"
        className="ast-mobile-header-wrap"
        data-type="off-canvas"
      >
        <div className="ast-main-header-wrap main-header-bar-wrap">
          <div
            className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default"
            data-section="section-primary-header-builder"
          >
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
              <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                <div
                  className="ast-builder-layout-element ast-flex site-header-focus-item"
                  data-section="title_tagline"
                >
                  <div
                    className="site-branding ast-site-identity"
                    itemtype="https://schema.org/Organization"
                    itemscope="itemscope"
                  >
                    <span className="site-logo-img">
                      <a
                        href="index.html"
                        className="custom-logo-link"
                        rel="home"
                        aria-current="page"
                      >
                        Talha Consultancy
                        {/* <img
                          width="250"
                          height="43"
                          src="wp-content/uploads/2021/07/weblogo-2.png"
                          className="custom-logo"
                          alt="A&amp;A ASSOCIATE LLC LOGO"
                          decoding="async"
                          srcset="
                              https://www.aaconsultancy.ae/wp-content/uploads/2021/07/weblogo-2-250x43.png 1x,
                              http://www.aaconsultancy.ae/wp-content/uploads/2021/07/weblogo-2.png         2x
                            "
                          sizes="(max-width: 250px) 100vw, 250px"
                        /> */}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                <div
                  className="ast-builder-layout-element ast-flex site-header-focus-item"
                  data-section="section-header-mobile-trigger"
                >
                  <div className="ast-button-wrap">
                    <button
                      type="button"
                      className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal"
                      aria-expanded="false"
                    >
                      <span className="screen-reader-text">Main Menu</span>
                      <span className="mobile-menu-toggle-icon">
                        {/* Mobile navigation manue opener */}
                        <span
                          onClick={mobileNavOpen}
                          className="ahfb-svg-iconset ast-inline-flex svg-baseline"
                        >
                          <svg
                            className="ast-mobile-svg ast-menu-svg"
                            fill="currentColor"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                          </svg>
                        </span>
                        <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                          <svg
                            className="ast-mobile-svg ast-close-svg"
                            fill="currentColor"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                          </svg>
                        </span>
                      </span>
                    </button>
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

export default MobileNav;
