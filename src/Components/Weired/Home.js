import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/Index";
import Bottom from "./Bottom/Index";

const Home = ({isDrawerOpen,setIsDrawerOpen}) => {

  // Inline styles for the drawer
  const drawerStyles = {
    position: "fixed",
    top: 0,
    right: isDrawerOpen ? 0 : "-100%",
    width: "300px",
    height: "100%",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    transition: "right 0.3s ease-in-out", // Add transition for smooth animation
    zIndex: 9999,
  };

  return (
    <>
      <div id="ast-mobile-popup-wrapper">
        <div id="ast-mobile-popup" style={drawerStyles}>
          <div className="ast-mobile-popup-overlay"></div>
          <div className="ast-mobile-popup-inner">
            <div className="ast-mobile-popup-header">
              <button
                type="button"
                id="menu-toggle-close"
                className="menu-toggle-close"
                aria-label="Close menu"
                tabIndex="0"
                onClick={() => setIsDrawerOpen(false)} // Function to close the side drawer
              >
                Close
              </button>
            </div>
            <div className="ast-mobile-popup-content">
              <div className="ast-main-header-bar-alignment">
                <div className="main-header-bar-navigation">
                  <Navigation />
                </div>
              </div>
              <Bottom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
