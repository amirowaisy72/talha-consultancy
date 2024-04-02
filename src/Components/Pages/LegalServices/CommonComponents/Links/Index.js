import React from "react";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  return (
    <>
      <div className="gdlr-core-pbf-sidebar-left gdlr-core-column-extend-left  attorna-sidebar-area gdlr-core-column-15 gdlr-core-pbf-sidebar-padding  gdlr-core-line-height">
        <div className="gdlr-core-sidebar-item gdlr-core-item-pdlr">
          <div
            id="gdlr-core-custom-menu-widget-3"
            className="widget widget_gdlr-core-custom-menu-widget attorna-widget"
          >
            <h3 className="attorna-widget-title">Practice Areas</h3>
            <span className="clear" />
            <div className="menu-practice-areas-container">
              <ul
                id="menu-practice-areas"
                className="gdlr-core-custom-menu-widget gdlr-core-menu-style-list"
              >
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/aviation"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/aviation" aria-current="page">
                    Aviation
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname ===
                    "/legal-services/home/banking-&-finance"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  <Link to="/legal-services/home/banking-&-finance">
                    Banking and Finance
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/construction"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  <Link to="/legal-services/home/construction">
                    Construction
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname ===
                    "/legal-services/home/commercial-transactions"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  <Link to="/legal-services/home/commercial-transactions">
                    Commercial Transactions and Corporate Law
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname ===
                    "/legal-services/home/data-protection-and-privacy"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/data-protection-and-privacy">
                    Data Protection and Privacy
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname ===
                    "/legal-services/home/domestic-and-international-arbitration"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/domestic-and-international-arbitration">
                    Domestic and International Arbitration
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/enery,oil&Gas"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/enery,oil&Gas">
                    Energy, Oil and Gas
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/insurance-law"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/insurance-law">
                    Insurance Law
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname ===
                    "/legal-services/home/intellectual-property"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/intellectual-property">
                    Intellectual Property
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/islamic-finance"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/islamic-finance">
                    Islamic Finance
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/litigation"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/litigation">Litigation</Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/maritime-law"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/maritime-law">
                    Maritime Law
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/pro-bono-work"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/pro-bono-work">
                    Pro Bono Work
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/real-estates"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/real-estates">
                    Real Estate
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname ===
                    "/legal-services/home/regulatory-and-govt-relations"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/regulatory-and-govt-relations">
                    Regulatory and Government Relations
                  </Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page ${
                    location.pathname === "/legal-services/home/tax"
                      ? "current-menu-item"
                      : ""
                  }`}
                >
                  {" "}
                  <Link to="/legal-services/home/tax">Tax</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
