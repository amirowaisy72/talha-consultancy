import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <li
        className="mega-menu-row mega-megamenu-bottom-row megamenu-bottom-row"
        id="mega-menu-408-2"
      >
        <ul className="mega-sub-menu">
          <li
            className="mega-menu-column mega-menu-columns-8-of-12"
            id="mega-menu-408-2-0"
          >
            <ul className="mega-sub-menu">
              <li
                className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-41"
                id="mega-menu-item-custom_html-41"
              >
                <div className="textwidget custom-html-widget">
                  <div className="offer-block">
                    <div className="offer-img">
                      <img
                        src="wp-content/uploads/2021/10/offer-icon.png"
                        alt="Offer"
                      />
                    </div>
                    <div className="offer-content">
                      <h6>Talha Consultancy</h6>
                      <h5>Special Offers</h5>
                      <Link
                        to="/contact-us/home"
                        rel="noopener"
                      >
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
          <li
            className="mega-menu-column mega-menu-columns-4-of-12"
            id="mega-menu-408-2-1"
          >
            <ul className="mega-sub-menu">
              <li
                className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-42"
                id="mega-menu-item-custom_html-42"
              >
                <div className="textwidget custom-html-widget">
                  <Link
                    to="/contact-us/home"
                    className="btn"
                  >
                    Request Free Business Consultation
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Index;
