import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div
          className="container-fluid px-0 scrollable-div"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <ul
            className="navbar-nav"
            style={{
              borderTop: "1px solid #dee2e6",
              borderBottom: "1px solid #dee2e6",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* First Navigation Item */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#collapse1"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                Company Setup
              </a>
              <div className="collapse" id="collapse1">
                <ul className="list-unstyled sub-item">
                  <li>
                    <a
                      className="nav-link"
                      href="#freezone-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="freezone-collapse1"
                    >
                      Freezone
                    </a>
                    <div className="collapse" id="freezone-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link className="nav-link" to="/freezone/overview">
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/freezone/locations">
                            Locations
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/freezone/advantages">
                            Advantages
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/freezone/consultation"
                          >
                            Free Consultation
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/freezone/offers">
                            Offers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#mainland-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="mainland-collapse1"
                    >
                      Mainland
                    </a>
                    <div className="collapse" id="mainland-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link className="nav-link" to="/mainland/overview">
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/mainland/licensing-categories"
                          >
                            Licensing Categories
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/mainland/company-type"
                          >
                            Company Type
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/mainland/consultation"
                          >
                            Free Consultation
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/freezone/offers">
                            Offers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#offshore-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="offshore-collapse1"
                    >
                      Offshore
                    </a>
                    <div className="collapse" id="offshore-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link className="nav-link" to="/offshore/overview">
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/offshore/locations">
                            Locations
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/offshore/advantages">
                            Advantages
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/offshore/consultation"
                          >
                            Free Consultation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* <li>
                    <Link className="nav-link" to="/otherServices">
                      Other Services
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Free Consultation
                    </a>
                  </li> */}
                </ul>
              </div>
            </li>

            {/* Second Navigation Item */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#collapse2"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Accounting
              </a>
              <div className="collapse" id="collapse2">
                <ul className="list-unstyled sub-item">
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/accounting-services"
                    >
                      Accounting Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/bookkeeping-services"
                    >
                      Bookkeeping Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/accounts-payable-resourcing"
                    >
                      Accounts Payable Outsourcing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/accounts-financial-reporting"
                    >
                      Accounting and Financial Reporting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/accounting-supervision-services"
                    >
                      Accounting Supervision Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/updating-backlog-accounts"
                    >
                      Updating of Backlog Accounts
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/account-reconciliation"
                    >
                      Account Reconciliation Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/accounting/payroll-services"
                    >
                      Payroll Services
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Third Navigation Item */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#collapse3"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                Auditing
              </a>
              <div className="collapse" id="collapse3">
                <ul className="list-unstyled sub-item">
                  <li>
                    <a
                      className="nav-link"
                      href="#external-audit-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="external-audit-collapse1"
                    >
                      External Audit
                    </a>
                    <div className="collapse" id="external-audit-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <p style={{ fontWeight: "bold" }}>
                            Registered Auditors In
                          </p>
                          <Link className="nav-link" to="/auditing">
                            Dubai Multi Commodities Center (DMCC)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a
                      className="nav-link"
                      href="#internal-audit-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="internal-audit-collapse1"
                    >
                      Internal Audit
                    </a>
                    <div className="collapse" id="internal-audit-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link className="nav-link" to="/auditing">
                            Financial Statement Audit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link className="nav-link" to="/auditing/icv-certification">
                      ICV Certification
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Fourth Navigation Item */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#collapse4"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                Advisory & Consulting
              </a>
              <div className="collapse" id="collapse4">
                <ul className="list-unstyled sub-item">
                  <li>
                    <a
                      className="nav-link"
                      href="#advisory-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="advisory-collapse1"
                    >
                      Advisory
                    </a>
                    <div className="collapse" id="advisory-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Corporate Tax Servces
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Tax Advisory
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Corporate Governance
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Mergers & Acquisitions
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Financial Reporting & Statement Analysis
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Financial Feasibility
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Business Strategy & Planning
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Business Succession Planning
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Business Restructuring
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Budgeting & Finance Planning
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Strategy & Operation
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Human Capital
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Valuation &Financial Restructuring
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Strategy & Operation
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Human Capital
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Valuation & Financial Restructuring
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#vat-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="vat-collapse1"
                    >
                      Vat Services
                    </a>
                    <div className="collapse" id="vat-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat & Tax Advisory
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat Implementation
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Var Refund at Airport
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat Consultants
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Key Vat Points
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat Fines
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Value Added Tax (Faq)
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat Assessment & Appleals
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat Compliance Audit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat Returns Filing
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat Training
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Vat in UAE
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            International Texation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#assurance-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="assurance-collapse1"
                    >
                      Assurance
                    </a>
                    <div className="collapse" id="assurance-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Business Vauation Assurance
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Due Diligence Assurance
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Risk Assurance
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#cfo-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="cfo-collapse1"
                    >
                      CFO Services
                    </a>
                    <div className="collapse" id="cfo-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Part Time CFO
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Meet Our CFO
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Virtul CFO
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#other-collapse1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="other-collapse1"
                    >
                      Other
                    </a>
                    <div className="collapse" id="other-collapse1">
                      <ul className="list-unstyled sub-item">
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Accounting Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Cloud Accounting Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Asset Tracking Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Accounting Workshops
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Tally
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            to="/advisory-&-consultation"
                          >
                            Business Solutions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            {/* Fifth Navigation Item */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#collapse5"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                Legal Services
              </a>
              <div className="collapse" id="collapse5">
                <ul className="list-unstyled sub-item">
                  <p
                    style={{
                      fontWeight: "bold",
                      borderBottom: "1px solid black",
                    }}
                  >
                    Practice Areas
                  </p>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/aviation"
                    >
                      Aviation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/banking-&-finance"
                    >
                      Banking & Finance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/construction"
                    >
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/enery,oil&Gas"
                    >
                      Energy, Oil & Gas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/insurance-law"
                    >
                      Insurance Law
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/intellectual-property"
                    >
                      Intellectual Property
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/commercial-transactions"
                    >
                      Commercial Transactions & Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/domestic-and-international-arbitration"
                    >
                      Domestic & International Arbitration
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/data-protection-and-privacy"
                    >
                      Data Protection & Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/regulatory-and-govt-relations"
                    >
                      Regulatory & Government Relations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/islamic-finance"
                    >
                      Islamic Finance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/litigation"
                    >
                      Litigation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/maritime-law"
                    >
                      Maritime Law
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/pro-bono-work"
                    >
                      Pro Bono Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      to="/legal-services/home/real-estates"
                    >
                      Real Estate
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/legal-services/home/tax">
                      Tax
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Sixth Navigation Item */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#collapse6"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapse6"
              >
                About Us
              </a>
              <div className="collapse" id="collapse6">
                <ul className="list-unstyled sub-item">
                  <li>
                    <Link className="nav-link" to="about-us/home/about">
                      <p
                        style={{
                          fontWeight: "bold",
                          borderBottom: "1px solid black",
                        }}
                      >
                        About Us
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="about-us/home/leadership-team">
                      Leadershp Team
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="about-us/home/companies">
                      Group of Companies
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="about-us/home/happy-customers">
                      Happy Customers
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="about-us/home/career">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Seventh Navigation Item */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#collapse7"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapse7"
              >
                News & Media
              </a>
              <div className="collapse" id="collapse7">
                <ul className="list-unstyled sub-item">
                  <p
                    style={{
                      fontWeight: "bold",
                      borderBottom: "1px solid black",
                    }}
                  >
                    Media Room
                  </p>
                  <li>
                    <Link className="nav-link" to="/news/home/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/news/home/news">
                      News
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Talha Consultancy Media
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Eight Navigation Item */}
            <li>
              <Link className="nav-link" to="/contact-us/home">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Index;
