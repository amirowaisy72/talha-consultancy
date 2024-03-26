import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Components/Fixed/Top/Index";
import Home from "./Components/Pages/Home/Index";
import Wiered from "./Components/Weired/Home";
import Footer from "./Components/Fixed/Footer/Index";
import Overview from "./Components/Pages/CompanySetup/Freezone/Overview/Index";
import Locations from "./Components/Pages/CompanySetup/Freezone/Locations/Index";
import Advantages from "./Components/Pages/CompanySetup/Freezone/Advantages/Index";
import Consultation from "./Components/Pages/CompanySetup/Freezone/Consultation/Index";
import Offers from "./Components/Pages/CompanySetup/Freezone/Offers/Index";
import OurCompany from "./Components/Pages/CompanySetup/Freezone/OurCompany/Index";
import OurTeam from "./Components/Pages/CompanySetup/Freezone/OurTeam/Index";
import OurNews from "./Components/Pages/CompanySetup/Freezone/OurNews/Index";
import MainlandOverview from "./Components/Pages/CompanySetup/Mainland/Overview/Index";
import MainlandLicensing from "./Components/Pages/CompanySetup/Mainland/LicensingCategories/Index";
import MainlandCompanyType from "./Components/Pages/CompanySetup/Mainland/CompanyType/Index";
import MainlandAdvantages from "./Components/Pages/CompanySetup/Mainland/Advantages/Index";
import MainlandConsultation from "./Components/Pages/CompanySetup/Mainland/Consultation/Index";
import OffshoreOverview from "./Components/Pages/CompanySetup/Offshore/Overview/Index"
import OffshoreLocations from "./Components/Pages/CompanySetup/Offshore/Locations/Index"
import OffshoreAdvantages from "./Components/Pages/CompanySetup/Offshore/Advantages/Index"
import OffshoreConsultation from "./Components/Pages/CompanySetup/Offshore/Consultation/Index"
import OtherServices from "./Components/Pages/CompanySetup/OtherServices/Index"

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
                      <Route
                        exact
                        path="/freezone/overview"
                        element={<Overview />}
                      ></Route>
                      <Route
                        exact
                        path="/freezone/locations"
                        element={<Locations />}
                      ></Route>
                      <Route
                        exact
                        path="/freezone/advantages"
                        element={<Advantages />}
                      ></Route>
                      <Route
                        exact
                        path="/freezone/consultation"
                        element={<Consultation />}
                      ></Route>
                      <Route
                        exact
                        path="/freezone/offers"
                        element={<Offers />}
                      ></Route>
                      <Route
                        exact
                        path="/freezone/our-company"
                        element={<OurCompany />}
                      ></Route>
                      <Route
                        exact
                        path="/freezone/our-team"
                        element={<OurTeam />}
                      ></Route>
                      <Route
                        exact
                        path="/freezone/our-news"
                        element={<OurNews />}
                      ></Route>
                      <Route
                        exact
                        path="/mainland/overview"
                        element={<MainlandOverview />}
                      ></Route>
                      <Route
                        exact
                        path="/mainland/licensing-categories"
                        element={<MainlandLicensing />}
                      ></Route>
                      <Route
                        exact
                        path="/mainland/company-type"
                        element={<MainlandCompanyType />}
                      ></Route>
                      <Route
                        exact
                        path="/mainland/advantages"
                        element={<MainlandAdvantages />}
                      ></Route>
                      <Route
                        exact
                        path="/mainland/consultation"
                        element={<MainlandConsultation />}
                      ></Route>
                      {/* OffShore */}
                      <Route
                        exact
                        path="/offshore/overview"
                        element={<OffshoreOverview />}
                      ></Route>
                      <Route
                        exact
                        path="/offshore/locations"
                        element={<OffshoreLocations />}
                      ></Route>
                      <Route
                        exact
                        path="/offshore/advantages"
                        element={<OffshoreAdvantages />}
                      ></Route>
                      <Route
                        exact
                        path="/offshore/consultation"
                        element={<OffshoreConsultation />}
                      ></Route>
                      <Route
                        exact
                        path="/otherServices"
                        element={<OtherServices />}
                      ></Route>
                      <Route
                        exact
                        path="/otherServices"
                        element={<OtherServices />}
                      ></Route>
                     
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
