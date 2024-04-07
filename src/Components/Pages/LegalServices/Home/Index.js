import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles.css";
import TopLine from "../CommonComponents/TopLine/Index";
import Links from "../CommonComponents/Links/Index";
import Aviation from "../Aviation/Index";
import BankingFinance from "../Banking/Index";
import Construction from "../Construction/Index";
import Energy from "../Energy/Index";
import Insurance from "../Insurance/Index";
import Intellectual from "../Intellectual/Index";
import Commercial from "../Commercial/Index";
import Domestic from "../Domestic/Index";
import DataProtection from "../DataProtection/Index";
import Regulatory from "../Regulatory/Index";
import Islamic from "../Islamic/Index";
import Litigation from "../Litigation/Index";
import Maritime from "../Maritime/Index";
import ProBono from "../ProBono/Index";
import RealEstate from "../RealEstate/Index";
import Tax from "../Tax/Index";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById("start");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  }, []);
  return (
    <div>
      <div className="legal-services attorna-body-outer-wrapper" id="start">
        <div className="attorna-body-wrapper clearfix  attorna-with-frame">
          <TopLine />
          <div className="attorna-page-wrapper" id="attorna-page-wrapper">
            <div className="gdlr-core-page-builder-body">
              <div className="gdlr-core-pbf-sidebar-wrapper ">
                <div className="gdlr-core-pbf-sidebar-container gdlr-core-line-height-0 clearfix gdlr-core-js gdlr-core-container">
                  {location.pathname === "/legal-services/home/aviation" ? (
                    <Aviation />
                  ) : location.pathname ===
                    "/legal-services/home/banking-&-finance" ? (
                    <BankingFinance />
                  ) : location.pathname ===
                    "/legal-services/home/construction" ? (
                    <Construction />
                  ) : location.pathname ===
                    "/legal-services/home/enery,oil&Gas" ? (
                    <Energy />
                  ) : location.pathname ===
                    "/legal-services/home/insurance-law" ? (
                    <Insurance />
                  ) : location.pathname ===
                    "/legal-services/home/intellectual-property" ? (
                    <Intellectual />
                  ) : location.pathname ===
                    "/legal-services/home/commercial-transactions" ? (
                    <Commercial />
                  ) : location.pathname ===
                    "/legal-services/home/domestic-and-international-arbitration" ? (
                    <Domestic />
                  ) : location.pathname ===
                    "/legal-services/home/data-protection-and-privacy" ? (
                    <DataProtection />
                  ) : location.pathname ===
                    "/legal-services/home/regulatory-and-govt-relations" ? (
                    <Regulatory />
                  ) : location.pathname ===
                    "/legal-services/home/islamic-finance" ? (
                    <Islamic />
                  ) : location.pathname ===
                    "/legal-services/home/litigation" ? (
                    <Litigation />
                  ) : location.pathname ===
                    "/legal-services/home/maritime-law" ? (
                    <Maritime />
                  ) : location.pathname ===
                    "/legal-services/home/pro-bono-work" ? (
                    <ProBono />
                  ) : location.pathname ===
                    "/legal-services/home/real-estates" ? (
                    <RealEstate />
                  ) : location.pathname === "/legal-services/home/tax" ? (
                    <Tax />
                  ) : (
                    ""
                  )}
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
