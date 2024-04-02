import React from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  return (
    <>
      <div className="attorna-breadcrumbs">
        <div className="attorna-breadcrumbs-container attorna-container">
          <div className="attorna-breadcrumbs-item attorna-item-pdlr">
            {/* Breadcrumb NavXT 7.2.0 */}
            <span property="itemListElement" typeof="ListItem">
              <a
                property="item"
                typeof="WebPage"
                title="Go to A&A Associate Legal Advisors."
                href="https://aalegal.ae"
                className="home"
              >
                <span property="name">A&amp;A Associate Legal Advisors</span>
              </a>
              <meta property="position" content={1} />
            </span>{" "}
            &gt;{" "}
            <span property="itemListElement" typeof="ListItem">
              <a
                property="item"
                typeof="WebPage"
                title="Go to Practice Areas."
                href="https://aalegal.ae/practice-area/"
                className="post post-page"
              >
                <span property="name">Practice Areas</span>
              </a>
              <meta property="position" content={2} />
            </span>{" "}
            &gt;{" "}
            <span property="itemListElement" typeof="ListItem">
              <span property="name" className="post post-page current-item">
                {location.pathname === "/legal-services/home/aviation"
                  ? "Aviation"
                  : location.pathname ===
                    "/legal-services/home/banking-&-finance"
                  ? "Banking and Finance"
                  : location.pathname === "/legal-services/home/construction"
                  ? "Construction"
                  : location.pathname === "/legal-services/home/insurance-law"
                  ? "Insurance Law"
                  : location.pathname ===
                    "/legal-services/home/commercial-transactions"
                  ? "Commercial Transactions and Corporate Law"
                  : location.pathname ===
                    "/legal-services/home/data-protection-and-privacy"
                  ? "Data Protection & Privacy"
                  : location.pathname ===
                    "/legal-services/home/domestic-and-international-arbitration"
                  ? "Domestic & International Arbitration"
                  : location.pathname ===
                    "/legal-services/home/intellectual-property"
                  ? "Intellectual Property"
                  : location.pathname === "/legal-services/home/litigation"
                  ? "Litigation"
                  : location.pathname === "/legal-services/home/maritime-law"
                  ? "Maritime Law"
                  : location.pathname === "/legal-services/home/enery,oil&Gas"
                  ? "Energy, Oil & Gas"
                  : location.pathname === "/legal-services/home/islamic-finance"
                  ? "Islamic Finance"
                  : location.pathname === "/legal-services/home/real-estates"
                  ? "Real Estate"
                  : location.pathname === "/legal-services/home/pro-bono-work"
                  ? "Pro Bono Work"
                  : location.pathname ===
                    "/legal-services/home/regulatory-and-govt-relations"
                  ? "Regulatory & Government Relations"
                  : location.pathname ===
                    "/legal-services/home/tax"
                  ? "Tax"
                  : ""}
              </span>
              <meta
                property="url"
                content="https://aalegal.ae/practice-area/aviation/"
              />
              <meta property="position" content={3} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
