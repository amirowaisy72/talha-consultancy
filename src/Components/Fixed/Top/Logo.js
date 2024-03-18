import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
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
              <Link to="" >
                Talha Consultancy
              </Link>
              {/* <a
                href="index.html"
                className="custom-logo-link"
                rel="home"
                aria-current="page"
              >
                <img
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
                />
              </a> */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
