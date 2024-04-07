import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <li
        className="mega-menu-column mega-menu-columns-4-of-12"
        id="mega-menu-1095-1-2"
      >
        <ul className="mega-sub-menu">
          <li
            className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-43"
            id="mega-menu-item-custom_html-43"
          >
            <div className="textwidget custom-html-widget">
              <div className="menu-img-block">
                <div className="menu-img-img">
                  <img
                    src="wp-content/uploads/2021/10/legal-icon.png"
                    alt="Legal"
                  />
                </div>
                <div className="menu-img-content">
                  <h6>Talha Consultancy</h6>
                  <h5>Legal Service</h5>
                  <Link to="/contact-us/home" rel="noopener">
                    Contact Now
                    <img
                      src="wp-content/uploads/2021/10/link-arrow.png"
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li
            className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-44"
            id="mega-menu-item-custom_html-44"
          >
            <div className="textwidget custom-html-widget">
              <div className="menu-img-block">
                <div className="menu-img-img">
                  <img
                    src="wp-content/uploads/2021/10/businesssetup-icon.png"
                    alt="Offer"
                  />
                </div>
                <div className="menu-img-content">
                  <h6>Talha Consultancy</h6>
                  <h5>Business Setup</h5>
                  <Link to="/contact-us/home" rel="noopener">
                    Contact Now
                    <img
                      src="wp-content/uploads/2021/10/link-arrow.png"
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Index;
