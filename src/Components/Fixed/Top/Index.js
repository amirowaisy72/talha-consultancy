import React from "react";
import TopLine from "./TopLine";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const Index = () => {
  return (
    <>
      <header
        className="site-header ast-primary-submenu-animation-fade header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
        id="masthead"
        itemtype="https://schema.org/WPHeader"
        itemscope="itemscope"
        itemid="#masthead"
      >
        <div id="ast-desktop-header" data-toggle-type="off-canvas">
          <TopLine />
          <NavBar />
        </div>
        {/* Mobile screen view of navbar */}
        <MobileNav />
      </header>
    </>
  );
};

export default Index;
