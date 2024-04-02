import React from "react";
import Blogs from "./Blogs/Index";
import AllNews from "./AllNews/Index";
import { useLocation } from "react-router-dom";
import "./style.css"

const Index = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <div className="news hfeed site" id="page">
          <div id="content" className="site-content">
            <div className="ast-container">
              <div id="primary" className="content-area primary">
                <main id="main" className="site-main">
                  {location.pathname === "/news/home/blogs" ? (
                    <Blogs />
                  ) : location.pathname === "/news/home/news" ? (
                    <AllNews />
                  ) : (
                    ""
                  )}
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
