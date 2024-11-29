import React from "react";
import { Link } from "react-router-dom";
import NavBottom from "../../CommonComponents/NavsBottom/Index"
import NavRight from "../../CommonComponents/NavRight/Index"

const NavBar = () => {
  return (
    <>
      <div className="ast-below-header-wrap">
        <div
          className="ast-below-header-bar ast-below-header site-header-focus-item"
          data-section="section-below-header-builder"
        >
          <div
            className="site-below-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
            data-section="section-below-header-builder"
          >
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
              <div className="site-header-below-section-left site-header-section ast-flex site-header-section-left">
                <div
                  className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                  data-section="section-hb-menu-1"
                >
                  <div className="ast-main-header-bar-alignment">
                    <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
                      <div className="mega-menu-toggle">
                        <div className="mega-toggle-blocks-left"></div>
                        <div className="mega-toggle-blocks-center"></div>
                        <div className="mega-toggle-blocks-right">
                          <div
                            className="mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-1"
                            id="mega-toggle-block-1"
                          >
                            <button
                              aria-label="Toggle Menu"
                              className="mega-toggle-animated mega-toggle-animated-slider"
                              type="button"
                              aria-expanded="false"
                            >
                              <span className="mega-toggle-animated-box">
                                <span className="mega-toggle-animated-inner"></span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <ul
                        id="mega-menu-primary"
                        className="mega-menu max-mega-menu mega-menu-horizontal mega-no-js"
                        data-event="hover_intent"
                        data-effect="fade_up"
                        data-effect-speed="200"
                        data-effect-mobile="disabled"
                        data-effect-speed-mobile="0"
                        data-panel-width="body"
                        data-panel-inner-width="#content"
                        data-mobile-force-width="false"
                        data-second-click="go"
                        data-document-click="collapse"
                        data-vertical-behaviour="standard"
                        data-breakpoint="920"
                        data-unbind="true"
                        data-mobile-state="collapse_all"
                        data-hover-intent-timeout="300"
                        data-hover-intent-interval="100"
                      >
                        <li
                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-408"
                          id="mega-menu-item-408"
                        >
                          <a
                            className="mega-menu-link"
                            href="#"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            Company Setup
                            <span className="mega-indicator"></span>
                          </a>
                          <ul className="mega-sub-menu">
                            <li className="mega-menu-row" id="mega-menu-408-0">
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-408-0-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-34"
                                      id="mega-menu-item-custom_html-34"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a
                                            href="#"
                                            rel="noopener"
                                          >
                                            Freezone
                                          </a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-37479"
                                      id="mega-menu-item-37479"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="dubai/freezone-company-formation/index.html"
                                      >
                                        Freezone
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37484"
                                          id="mega-menu-item-37484"
                                        >
                                          <Link
                                            to="/freezone/overview"
                                            className="mega-menu-link"
                                          >
                                            Overview
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37485"
                                          id="mega-menu-item-37485"
                                        >
                                          <Link
                                            to="/freezone/locations"
                                            className="mega-menu-link"
                                          >
                                            Locations
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37486"
                                          id="mega-menu-item-37486"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/freezone/advantages"
                                          >
                                            Advantages
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37487"
                                          id="mega-menu-item-37487"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/freezone/consultation"
                                          >
                                            Free Consultation
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37488"
                                          id="mega-menu-item-37488"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/freezone/offers"
                                          >
                                            Offers
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-408-0-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-35"
                                      id="mega-menu-item-custom_html-35"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a
                                            href="dubai/mainland-company-setup/index.html"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            Mainland
                                          </a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-37480"
                                      id="mega-menu-item-37480"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="dubai/mainland-company-setup/index.html"
                                      >
                                        Mainland
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37489"
                                          id="mega-menu-item-37489"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/mainland/overview"
                                          >
                                            Overview
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37490"
                                          id="mega-menu-item-37490"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/mainland/licensing-categories"
                                          >
                                            Licensing Categories
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37491"
                                          id="mega-menu-item-37491"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/mainland/company-type"
                                          >
                                            Company Type
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37492"
                                          id="mega-menu-item-37492"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/mainland/dvantages"
                                          >
                                            Advantages
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37493"
                                          id="mega-menu-item-37493"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/mainland/consultation"
                                          >
                                            Free Consultation
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37494"
                                          id="mega-menu-item-37494"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/freezone/offers"
                                          >
                                            Offers
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-408-0-2"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-36"
                                      id="mega-menu-item-custom_html-36"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a
                                            href="dubai/offshore-company-formation/index.html"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            Offshore
                                          </a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-37481"
                                      id="mega-menu-item-37481"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="dubai/offshore-company-formation/index.html"
                                      >
                                        Offshore
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37495"
                                          id="mega-menu-item-37495"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/offshore/overview"
                                          >
                                            Overview
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37496"
                                          id="mega-menu-item-37496"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/offshore/locations"
                                          >
                                            Locations
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37497"
                                          id="mega-menu-item-37497"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/offshore/advantages"
                                          >
                                            Advantages
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37498"
                                          id="mega-menu-item-37498"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/offshore/consultation"
                                          >
                                            Free Consultation
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37499"
                                          id="mega-menu-item-37499"
                                        >
                                          <a
                                            target="_blank"
                                            className="mega-menu-link"
                                            href="#"
                                          >
                                            Offers
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-row" id="mega-menu-408-1">
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-8-of-12"
                                  id="mega-menu-408-1-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-37"
                                      id="mega-menu-item-custom_html-37"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <Link to="/otherServices">
                                            Other Services
                                          </Link>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37482"
                                      id="mega-menu-item-37482"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="#"
                                      >
                                        Other Services
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-408-1-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-38"
                                      id="mega-menu-item-custom_html-38"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a
                                            href="dubai/contact-us/index.html"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            Free Consultation
                                          </a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37483"
                                      id="mega-menu-item-37483"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="#"
                                      >
                                        Free Consultation
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <NavBottom />
                          </ul>
                        </li>
                        <li
                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-46666"
                          id="mega-menu-item-46666"
                        >
                          <a
                            className="mega-menu-link"
                            href="#"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            Accounting
                            <span className="mega-indicator"></span>
                          </a>
                          <ul className="mega-sub-menu">
                            <li
                              className="mega-menu-row mega-megamenu-top-row megamenu-top-row"
                              id="mega-menu-46666-0"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-12-of-12"
                                  id="mega-menu-46666-0-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-62"
                                      id="mega-menu-item-custom_html-62"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <Link to="/accounting/accounting-services">
                                            Accounting Services
                                          </Link>
                                        </h4>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mega-menu-row mega-megamenu-top-row mega-megamenu-one megamenu-top-row megamenu-one"
                              id="mega-menu-46666-1"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-46666-1-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35735"
                                      id="mega-menu-item-35735"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/accounting/bookkeeping-services"
                                      >
                                        Bookkeeping Services
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35736"
                                      id="mega-menu-item-35736"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/accounting/accounts-payable-resourcing"
                                      >
                                        Accounts Payable Outsourcing
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35737"
                                      id="mega-menu-item-35737"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/accounting/accounts-financial-reporting"
                                      >
                                        Accounting and Financial Reporting
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35738"
                                      id="mega-menu-item-35738"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/accounting/accounting-supervision-services"
                                      >
                                        Accounting Supervision Services
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-46666-1-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35739"
                                      id="mega-menu-item-35739"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/accounting/updating-backlog-accounts"
                                      >
                                        Updating of Backlog Accounts
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35740"
                                      id="mega-menu-item-35740"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/accounting/account-reconciliation"
                                      >
                                        Account Reconciliation Services
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35741"
                                      id="mega-menu-item-35741"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/accounting/payroll-services"
                                      >
                                        Payroll Services
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <NavBottom />
                          </ul>
                        </li>
                        <li
                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-46668"
                          id="mega-menu-item-46668"
                        >
                          <a
                            className="mega-menu-link"
                            href="#"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            Auditing
                            <span className="mega-indicator"></span>
                          </a>
                          <ul className="mega-sub-menu">
                            <li
                              className="mega-menu-row mega-megamenu-top-row megamenu-top-row"
                              id="mega-menu-46668-0"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-8-of-12"
                                  id="mega-menu-46668-0-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-67"
                                      id="mega-menu-item-custom_html-67"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <Link to="#">External Audit</Link>
                                        </h4>
                                        <span className="sub-title">
                                          Registered Auditors in
                                        </span>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-2-columns mega-menu-item-35742"
                                      id="mega-menu-item-35742"
                                    >
                                      <a
                                        className="mega-menu-link"
                                        href="external-audit-uae/index.html"
                                      >
                                        External Audit
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35745"
                                          id="mega-menu-item-35745"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/auditing"
                                          >
                                            Dubai Multi Commodities Centre
                                            (DMCC)
                                          </Link>
                                        </li>
                                        {/* Display the list of external auditors */}
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-46668-0-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-68"
                                      id="mega-menu-item-custom_html-68"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <Link to="/#">Internal Audit</Link>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-item-35743"
                                      id="mega-menu-item-35743"
                                    >
                                      <Link className="mega-menu-link" to="#">
                                        Internal Audit
                                        <span className="mega-indicator"></span>
                                      </Link>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36527"
                                          id="mega-menu-item-36527"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/auditing"
                                          >
                                            Financial Statement Audit
                                          </Link>
                                        </li>
                                        {/* Display the list of internal auditors */}
                                      </ul>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-69"
                                      id="mega-menu-item-custom_html-69"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <Link to="/auditing/icv-certification">
                                            ICV Certification
                                          </Link>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35744"
                                      id="mega-menu-item-35744"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/auditing/icv-certification"
                                      >
                                        ICV Certification
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <NavBottom />
                          </ul>
                        </li>
                        <li
                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-36921"
                          id="mega-menu-item-36921"
                        >
                          <a
                            className="mega-menu-link"
                            href="#"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            Advisory & Consulting
                            <span className="mega-indicator"></span>
                          </a>
                          <ul className="mega-sub-menu">
                            <li
                              className="mega-menu-row"
                              id="mega-menu-36921-0"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-36921-0-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-27"
                                      id="mega-menu-item-custom_html-27"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a href="#">Advisory</a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-36922"
                                      id="mega-menu-item-36922"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/advisory-&-consultation"
                                      >
                                        Advisory
                                        <span className="mega-indicator"></span>
                                      </Link>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-51739"
                                          id="mega-menu-item-51739"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Corporate Tax Services
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36929"
                                          id="mega-menu-item-36929"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Tax Advisory
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36930"
                                          id="mega-menu-item-36930"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Corporate Governance
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36931"
                                          id="mega-menu-item-36931"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Mergers and Acquisitions
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36932"
                                          id="mega-menu-item-36932"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Financial Reporting and Statement
                                            Analysis
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36933"
                                          id="mega-menu-item-36933"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Financial Feasibility
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36934"
                                          id="mega-menu-item-36934"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Business Strategy and Planning
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36935"
                                          id="mega-menu-item-36935"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Business Succession Planning
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36936"
                                          id="mega-menu-item-36936"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Business Restructuring
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36937"
                                          id="mega-menu-item-36937"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            href="budgeting-and-finance-planning/index.html"
                                          >
                                            Budgeting and Finance Planning
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36938"
                                          id="mega-menu-item-36938"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Strategy and Operation
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36939"
                                          id="mega-menu-item-36939"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Human Capital
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36940"
                                          id="mega-menu-item-36940"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Valuation and Financial
                                            Restructuring
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-28"
                                      id="mega-menu-item-custom_html-28"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a href="#">Assurance</a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-36923"
                                      id="mega-menu-item-36923"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Assurance
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36943"
                                          id="mega-menu-item-36943"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Business Valuation Assurance
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36944"
                                          id="mega-menu-item-36944"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Due Diligence Assurance
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36945"
                                          id="mega-menu-item-36945"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Risk Assurance
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-36921-0-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-30"
                                      id="mega-menu-item-custom_html-30"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a href="#">VAT Services</a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-36925"
                                      id="mega-menu-item-36925"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        VAT Services
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36949"
                                          id="mega-menu-item-36949"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT and Tax Advisory
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36950"
                                          id="mega-menu-item-36950"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Implementation
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36951"
                                          id="mega-menu-item-36951"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Refund at Airport
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36952"
                                          id="mega-menu-item-36952"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Consultants
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36953"
                                          id="mega-menu-item-36953"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Key VAT Points
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36954"
                                          id="mega-menu-item-36954"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Fines
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36955"
                                          id="mega-menu-item-36955"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Value Added Tax (FAQ)
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36956"
                                          id="mega-menu-item-36956"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Assessment and Appeals
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36957"
                                          id="mega-menu-item-36957"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Compliance Audit
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36958"
                                          id="mega-menu-item-36958"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Returns Filing
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36959"
                                          id="mega-menu-item-36959"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT Training
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36960"
                                          id="mega-menu-item-36960"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            VAT in UAE
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36961"
                                          id="mega-menu-item-36961"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            International Taxation
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-36921-0-2"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-29"
                                      id="mega-menu-item-custom_html-29"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a href="#">CFO Services</a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-36924"
                                      id="mega-menu-item-36924"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        CFO Services
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36947"
                                          id="mega-menu-item-36947"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Part Time CFO
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36946"
                                          id="mega-menu-item-36946"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Meet Our CFO
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-36948"
                                          id="mega-menu-item-36948"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Virtual CFO
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-32"
                                      id="mega-menu-item-custom_html-32"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a href="#">Bank Account Opening</a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-36927"
                                      id="mega-menu-item-36927"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Bank Account Opening
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-33"
                                      id="mega-menu-item-custom_html-33"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a href="#">Other</a>
                                        </h4>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-36928"
                                      id="mega-menu-item-36928"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Other
                                        <span className="mega-indicator"></span>
                                      </a>
                                      <ul className="mega-sub-menu">
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-37361"
                                          id="mega-menu-item-37361"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Accounting Software
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-37362"
                                          id="mega-menu-item-37362"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Cloud Accounting Software
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-37363"
                                          id="mega-menu-item-37363"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Asset Tracking Software
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-37464"
                                          id="mega-menu-item-37464"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Accounting Workshops
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-37364"
                                          id="mega-menu-item-37364"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Tally
                                          </Link>
                                        </li>
                                        <li
                                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-37465"
                                          id="mega-menu-item-37465"
                                        >
                                          <Link
                                            className="mega-menu-link"
                                            to="/advisory-&-consultation"
                                          >
                                            Software Solutions
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <NavBottom />
                          </ul>
                        </li>
                        <li
                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-35734"
                          id="mega-menu-item-35734"
                        >
                          {/* <Link
                            className="mega-menu-link"
                            to="#"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            Legal Services
                            <span className="mega-indicator"></span>
                          </Link> */}
                          <ul className="mega-sub-menu">
                            <li
                              className="mega-menu-row"
                              id="mega-menu-35734-0"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-12-of-12"
                                  id="mega-menu-35734-0-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-12"
                                      id="mega-menu-item-custom_html-12"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <Link to="#" rel="noopener">
                                            Practice Areas
                                          </Link>
                                        </h4>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mega-menu-row mega-legal-menus legal-menus"
                              id="mega-menu-35734-1"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-megamenu-col mega-menu-columns-4-of-12 megamenu-col"
                                  id="mega-menu-35734-1-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-13"
                                      id="mega-menu-item-custom_html-13"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/aviation"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Aviation</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-16"
                                      id="mega-menu-item-custom_html-16"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/banking-&-finance"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Banking and Finance</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-19"
                                      id="mega-menu-item-custom_html-19"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/construction"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Construction</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-14"
                                      id="mega-menu-item-custom_html-14"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/enery,oil&Gas"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Energy, Oil and Gas</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-17"
                                      id="mega-menu-item-custom_html-17"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/insurance-law"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Insurance Law</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-20"
                                      id="mega-menu-item-custom_html-20"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/intellectual-property"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Intellectual Property</h6>
                                        </Link>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-megamenu-col mega-menu-columns-4-of-12 megamenu-col"
                                  id="mega-menu-35734-1-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-22"
                                      id="mega-menu-item-custom_html-22"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/commercial-transactions"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>
                                            Commercial Transactions and
                                            Corporate Law
                                          </h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-54"
                                      id="mega-menu-item-custom_html-54"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/domestic-and-international-arbitration"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>
                                            Domestic and International
                                            Arbitration
                                          </h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-53"
                                      id="mega-menu-item-custom_html-53"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/data-protection-and-privacy"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Data Protection and Privacy</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-24"
                                      id="mega-menu-item-custom_html-24"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/regulatory-and-govt-relations"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>
                                            Regulatory and Government Relations
                                          </h6>
                                        </Link>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-megamenu-col mega-menu-columns-4-of-12 megamenu-col"
                                  id="mega-menu-35734-1-2"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-23"
                                      id="mega-menu-item-custom_html-23"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/islamic-finance"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Islamic Finance</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-55"
                                      id="mega-menu-item-custom_html-55"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/litigation"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Litigation</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-15"
                                      id="mega-menu-item-custom_html-15"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/maritime-law"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Maritime Law</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-18"
                                      id="mega-menu-item-custom_html-18"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/pro-bono-work"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Pro Bono Work</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-21"
                                      id="mega-menu-item-custom_html-21"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/real-estates"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Real Estate</h6>
                                        </Link>
                                      </div>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-56"
                                      id="mega-menu-item-custom_html-56"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <Link
                                          className="megamenu-link"
                                          to="/legal-services/home/tax"
                                          rel="noopener"
                                        >
                                          <img
                                            src="wp-content/uploads/2021/10/menu-icon-2.svg"
                                            alt
                                          />
                                          <h6>Tax</h6>
                                        </Link>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mega-menu-row mega-megamenu-top-row mega-legal-mob-menu megamenu-top-row legal-mob-menu"
                              id="mega-menu-35734-2"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-35734-2-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37466"
                                      id="mega-menu-item-37466"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/aviation/"
                                      >
                                        Aviation
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37467"
                                      id="mega-menu-item-37467"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/banking-and-finance/"
                                      >
                                        Banking and Finance
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37468"
                                      id="mega-menu-item-37468"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/construction/"
                                      >
                                        Construction
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37469"
                                      id="mega-menu-item-37469"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/commercial-transactions-and-corporate-law/"
                                      >
                                        Commercial Transactions and Corporate
                                        Law
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37470"
                                      id="mega-menu-item-37470"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/data-protection-and-privacy/"
                                      >
                                        Data Protection and Privacy
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37471"
                                      id="mega-menu-item-37471"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/domestic-and-international-arbitration/"
                                      >
                                        Domestic and International Arbitration
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-35734-2-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37473"
                                      id="mega-menu-item-37473"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/insurance-law/"
                                      >
                                        Insurance Law
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37472"
                                      id="mega-menu-item-37472"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/energy-oil-and-gas/"
                                      >
                                        Energy, Oil and Gas
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37474"
                                      id="mega-menu-item-37474"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/intellectual-property/"
                                      >
                                        Intellectual Property
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37475"
                                      id="mega-menu-item-37475"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/islamic-finance/"
                                      >
                                        Islamic Finance
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37476"
                                      id="mega-menu-item-37476"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/litigation/"
                                      >
                                        Litigation
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-35734-2-2"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37477"
                                      id="mega-menu-item-37477"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/maritime-law/"
                                      >
                                        Maritime Law
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37478"
                                      id="mega-menu-item-37478"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/pro-bono-work/"
                                      >
                                        Pro Bono Work
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-45708"
                                      id="mega-menu-item-45708"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/real-estate/"
                                      >
                                        Real Estate
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-45709"
                                      id="mega-menu-item-45709"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/regulatory-and-government-relations/"
                                      >
                                        Regulatory and Government Relations
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-45710"
                                      id="mega-menu-item-45710"
                                    >
                                      <a
                                        target="_blank"
                                        className="mega-menu-link"
                                        href="http://aalegal.ae/practice-area/tax/"
                                      >
                                        Tax
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <NavBottom />
                          </ul>
                        </li>
                        <li
                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-1095"
                          id="mega-menu-item-1095"
                        >
                          <Link
                            className="mega-menu-link"
                            to="about-us/home/about"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            About Us
                            <span className="mega-indicator"></span>
                          </Link>
                          <ul className="mega-sub-menu">
                            <li className="mega-menu-row" id="mega-menu-1095-0">
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-12-of-12"
                                  id="mega-menu-1095-0-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-47"
                                      id="mega-menu-item-custom_html-47"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <Link to="#">About Us</Link>
                                        </h4>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mega-menu-row mega-megamenu-top-row mega-megamenu-one megamenu-top-row megamenu-one"
                              id="mega-menu-1095-1"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-1095-1-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37646"
                                      id="mega-menu-item-37646"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Our Company
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-47125"
                                      id="mega-menu-item-47125"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="about-us/home/leadership-team"
                                      >
                                        Leadership Team
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37651"
                                      id="mega-menu-item-37651"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="about-us/home/companies"
                                      >
                                        Group of Companies
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37649"
                                      id="mega-menu-item-37649"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Our Partners
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-1095-1-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37650"
                                      id="mega-menu-item-37650"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Global Presence
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-37652"
                                      id="mega-menu-item-37652"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="about-us/home/happy-customers"
                                      >
                                        Happy Customers
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37653"
                                      id="mega-menu-item-37653"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="about-us/home/career"
                                      >
                                        Career
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <NavRight />
                              </ul>
                            </li>
                            <NavBottom />
                          </ul>
                        </li>
                        <li
                          className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-409"
                          id="mega-menu-item-409"
                        >
                          <a
                            className="mega-menu-link"
                            href="#"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            News & Media
                            <span className="mega-indicator"></span>
                          </a>
                          <ul className="mega-sub-menu">
                            <li className="mega-menu-row" id="mega-menu-409-0">
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-12-of-12"
                                  id="mega-menu-409-0-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-52"
                                      id="mega-menu-item-custom_html-52"
                                    >
                                      <div className="textwidget custom-html-widget">
                                        <h4>
                                          <a href="#">Media Room</a>
                                        </h4>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mega-menu-row mega-megamenu-top-row mega-megamenu-one megamenu-top-row megamenu-one"
                              id="mega-menu-409-1"
                            >
                              <ul className="mega-sub-menu">
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-409-1-0"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37682"
                                      id="mega-menu-item-37682"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Exclusive Offers Launch
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35839"
                                      id="mega-menu-item-35839"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/news/home/blogs"
                                      >
                                        Blogs
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-35840"
                                      id="mega-menu-item-35840"
                                    >
                                      <Link
                                        className="mega-menu-link"
                                        to="/news/home/news"
                                      >
                                        News
                                      </Link>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37683"
                                      id="mega-menu-item-37683"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Awards
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="mega-menu-column mega-menu-columns-4-of-12"
                                  id="mega-menu-409-1-1"
                                >
                                  <ul className="mega-sub-menu">
                                    <li
                                      className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-44427"
                                      id="mega-menu-item-44427"
                                    >
                                      <a
                                        className="mega-menu-link"
                                        href="#"
                                      >
                                        Talha Consultancy Media
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37684"
                                      id="mega-menu-item-37684"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Videos
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37685"
                                      id="mega-menu-item-37685"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Press Release
                                      </a>
                                    </li>
                                    <li
                                      className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-37686"
                                      id="mega-menu-item-37686"
                                    >
                                      <a className="mega-menu-link" href="#">
                                        Success Stories
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <NavRight />
                              </ul>
                            </li>
                            <NavBottom />
                          </ul>
                        </li>
                        <li
                          className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-46624"
                          id="mega-menu-item-46624"
                        >
                          <Link
                            className="mega-menu-link"
                            to="/contact-us/home"
                            tabindex="0"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-header-below-section-right site-header-section ast-flex ast-grid-right-section"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
