import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Components/Fixed/Top/Index";
import Home from "./Components/Pages/Home/Index";
import Wiered from "./Components/Weired/Home";
import Footer from "./Components/Fixed/Footer/Index";
import Overview from "./Components/Pages/CompanySetup/Overview/Index"

function App() {
  return (
    <>
      <HashRouter>
        <body
          itemtype="https://schema.org/WebPage"
          itemscope="itemscope"
          className="home page-template-default page page-id-45463 wp-custom-logo ehf-footer ehf-template-astra ehf-stylesheet-astra-child mega-menu-primary ast-desktop ast-page-builder-template ast-no-sidebar astra-4.5.2 group-blog ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header elementor-default elementor-kit-354 elementor-page elementor-page-45463"
        >
          <div className="hfeed site" id="page">
            <a className="skip-link screen-reader-text" href="#content">
              Skip to content
            </a>
            <NavBar />
            <div id="content" className="site-content">
              <div className="ast-container">
                <div id="primary" className="content-area primary">
                  <main id="main" className="site-main">
                    <Routes>
                      <Route exact path="" element={<Home />}></Route>
                      <Route exact path="/overview" element={<Overview />}></Route>
                    </Routes>
                  </main>
                </div>
              </div>
            </div>
            {/* Something weired about mobile screen */}
            <Wiered />
            {/* Footer */}
            <Footer />
          </div>
        </body>
      </HashRouter>
    </>
  );
}

export default App;
