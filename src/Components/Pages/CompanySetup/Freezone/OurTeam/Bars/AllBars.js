import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const AllBars = () => {
  const location = useLocation();
  return (
    <>
      <div className="elementor-widget-container">
        <div
          className="uael-nav-menu uael-layout-horizontal uael-nav-menu-layout uael-pointer__none"
          data-layout="horizontal"
        >
          <div
            role="button"
            className="uael-nav-menu__toggle elementor-clickable"
          >
            <span className="screen-reader-text">Main Menu</span>
            <div className="uael-nav-menu-icon"></div>
          </div>
          <nav
            className="uael-nav-menu__layout-horizontal uael-nav-menu__submenu-arrow"
            data-toggle-icon
            data-close-icon
            data-full-width
          >
            <ul className="uael-nav-menu uael-nav-menu-custom uael-custom-wrapper">
              <li
                className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-91c2175"
                data-dropdown-width="default"
                data-dropdown-pos="left"
              >
                <NavLink
                  exact
                  to="/freezone/offers"
                  className="uael-menu-item"
                  style={{
                    border: location.pathname === '/freezone/offers' ? '2px solid black' : ''  
                  }}
                >
                  Offers
                  <span className="uael-menu-toggle sub-arrow parent-item">
                    <i className="fa"></i>
                  </span>
                </NavLink>
              </li>
              <li
                className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-7846707"
                data-dropdown-width="default"
                data-dropdown-pos="left"
              >
                <NavLink
                  exact
                  to="/freezone/our-company"
                  className="uael-menu-item"
                  style={{
                    border: location.pathname === '/freezone/our-company' ? '2px solid black' : ''  
                  }}
                >
                  Our Company
                  <span className="uael-menu-toggle sub-arrow parent-item">
                    <i className="fa"></i>
                  </span>
                </NavLink>
              </li>
              <li
                className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-7846707"
                data-dropdown-width="default"
                data-dropdown-pos="left"
              >
                <NavLink
                  exact
                  to="/freezone/our-team"
                  className="uael-menu-item"
                  style={{
                    border: location.pathname === '/freezone/our-team' ? '2px solid black' : ''  
                  }}
                >
                  Our Team
                  <span className="uael-menu-toggle sub-arrow parent-item">
                    <i className="fa"></i>
                  </span>
                </NavLink>
              </li>
              <li
                className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-3b98fb8"
                data-dropdown-width="default"
                data-dropdown-pos="left"
              >
                <NavLink
                  exact
                  to="/freezone/our-news"
                  className="uael-menu-item"
                  style={{
                    border: location.pathname === '/freezone/our-news' ? '2px solid black' : ''  
                  }}
                >
                  Our News
                  <span className="uael-menu-toggle sub-arrow parent-item">
                    <i className="fa"></i>
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    </>
  );
};

export default AllBars;
