import React, { useState } from "react";

const Index = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showFreezoneSubmenu, setShowFreezoneSubmenu] = useState(false);
  const [showMainlandSubmenu, setShowMainlandSubmenu] = useState(false);
  const [showOffshoreSubmenu, setShowOffshoreSubmenu] = useState(false);

  const [showAccountingSubmenu, setShowAccountingSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const toggleFreezoneSubmenu = () => {
    setShowFreezoneSubmenu(!showFreezoneSubmenu);
  };

  const toggleMainlandSubmenu = () => {
    setShowMainlandSubmenu(!showMainlandSubmenu);
  };

  const toggleOffshoreSubmenu = () => {
    setShowOffshoreSubmenu(!showOffshoreSubmenu);
  };

  const toggleAccountingSubmenu = () => {
    setShowAccountingSubmenu(!showAccountingSubmenu);
  };

  return (
    <>
      <li className="nav-item dropdown mx-2" style={{ listStyleType: "none", display: "flex", alignItems: "center" }}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          onClick={toggleSubmenu}
          aria-expanded={showSubmenu ? "true" : "false"}
        >
          Company Setup
        </a>
        <ul
          className={"dropdown-menu" + (showSubmenu ? " show" : "")}
          style={{ padding: "10px" }}
        >
          <li style={{ position: "relative" }}>
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              onClick={toggleFreezoneSubmenu}
            >
              Freezone
            </a>
            <ul
              className={"dropdown-menu" + (showFreezoneSubmenu ? " show" : "")}
            >
              <li>
                <a href="#" className="dropdown-item">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Advantages
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Offers
                </a>
              </li>
            </ul>
          </li>
          <li style={{ position: "relative" }}>
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              onClick={toggleMainlandSubmenu}
            >
              Mainland
            </a>
            <ul
              className={"dropdown-menu" + (showMainlandSubmenu ? " show" : "")}
            >
              <li>
                <a href="#" className="dropdown-item">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Licensing Categories
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Company Type
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Advantages
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Offers
                </a>
              </li>
            </ul>
          </li>
          <li style={{ position: "relative" }}>
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              onClick={toggleOffshoreSubmenu}
            >
              Offshore
            </a>
            <ul
              className={"dropdown-menu" + (showOffshoreSubmenu ? " show" : "")}
            >
              <li>
                <a href="#" className="dropdown-item">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Advantages
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Offers
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="dropdown-item">
              Other Services
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-item">
              Free Consultation
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown mx-2" style={{ listStyleType: "none" , display: "flex", alignItems: "center" }}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          onClick={toggleAccountingSubmenu}
          aria-expanded={showAccountingSubmenu ? "true" : "false"}
        >
          Accounting
        </a>
        <ul
          className={"dropdown-menu" + (showAccountingSubmenu ? " show" : "")}
          style={{ padding: "10px" }}
        >
          <li>
            <a href="#" className="dropdown-item">
              Accounting Services
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-item">
              Bookkeeping Services
            </a>
          </li>
          {/* Add other accounting sub-items */}
        </ul>
      </li>
    </>
  );
};

export default Index;
