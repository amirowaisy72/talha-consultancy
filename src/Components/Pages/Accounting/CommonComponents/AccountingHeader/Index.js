import React, { useEffect } from "react";

const Index = () => {
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
    <>
      <div id="start" className="elementor-widget-container">
        <a href="dubai/business-setup-dubai/index.html" target="_blank">
          <img
            fetchpriority="high"
            decoding="async"
            width="2048"
            height="783"
            src="wp-content/uploads/2024/02/aa-horizontal-banner.webp"
            className="attachment-full size-full wp-image-54045"
            alt
            sizes="(max-width: 2048px) 100vw, 2048px"
          />
        </a>
      </div>
      ;
    </>
  );
};

export default Index;
